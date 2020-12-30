import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import Service from '@ember/service';

/**
 * Acceleration structure for swiftly finding ExperienceTreeNodeScore
 * entities.
 */
export default class NodeScoreStateManagerService extends Service {
  @service store;

  /**
   * Hash with [experience_id][tree_node_id].
   */
  optimizedHash = {};

  /**
   * Re-indexes all tree-node-score entities currently known by Ember
   * Data.
   *
   * Assumes the link to TreeNode and Experience have been fetched for
   * all scores.
   */
  reindex() {
    const optimizedHash = {};

    const knownEtnss =
      this
      .store
      .peekAll('experience-tree-node-score');

    knownEtnss.forEach( (etns) => {
      const experienceHash = optimizedHash[get(etns, "experience.id")] || {};
      experienceHash[get(etns, "score.id")] = etns;
      optimizedHash[get(etns, "experience.id")] = experienceHash;
    });

    this.optimizedHash = optimizedHash;
  }

  async fetchAll(experience) {
    await this.store.query( 'experience-tree-node-score',
                         { "filter[experience][:id:]": experience.id,
                           include: "tree-node,experience",
                           "page[size]": 1500 });
    this.reindex();
  }

  /**
   * Registers a new entity.  Use this when you have just fetched a single entity.
   *
   * Assumes the TreeNode and Experience have been fetched too.
   *
   * @param experienceTreeNodeScore TreeNodeScore The score to add to the hash.
   */
  register( experienceTreeNodeScore ) {
    const etns = experienceTreeNodeScore;
    this.optimizedHash[get(etns, "experience.id")] = this.optimizedHash[get(etns, "experience.id")] || {};
    this.optimizedHash[get(etns, "experience.id")][get(etns, "treeNode.id")] = etns;
  }

  registerNotExists( experience, treeNode ) {
    if( experience && treeNode ) {
      this.optimizedHash[ experience.id ] = this.optimizedHash[ experience.id ] || {};
      this.optimizedHash[ experience.id ][ treeNode.id ] = null;
    }
  }

  isRegistered( experience, treeNode ) {
    return this.optimizedHash[ experience.id ] && treeNode.id in this.optimizedHash[ experience.id ];
  }

  /**
   * Fetches a single entity, either from cache or by querying and storing it.
   *
   * @param experience Experience The Experience entity which must match.
   * @param treeNode TreeNode the TreeNode which must match.
   */
  async fetch( experience, treeNode ) {
    if( this.isRegistered( experience, treeNode ) ) {
      return this.peek( experience, treeNode );
    } else if( !experience || !treeNode || !experience.id || !treeNode.id ) {
      return null;
    } else {
      try {
        const experienceTreeNodeScores =
              (await this
               .store
               .query('experience-tree-node-score',
                      { "filter[experience][:id:]": experience.id,
                        "filter[tree-node][:id:]": treeNode.id,
                        include: "experience,tree-node"
                      }));

        const experienceTreeNodeScore = experienceTreeNodeScores.firstObject;
        if( experienceTreeNodeScore )
          this.register( experienceTreeNodeScore );
        else
          this.registerNotExists( experience, treeNode );
        return experienceTreeNodeScore;
      } catch (e) {
        // eslint-disable-next-line no-console
        if( console && console.debug ) {
          // eslint-disable-next-line no-console
          console.debug(`Could not fetch experienceTreeNodeScore`);
          // eslint-disable-next-line no-console
          console.debug(e);
        }
        return null;
      }
    }
  }

  /**
   * Peeks for a single ExperienceTreeNodeScore and returns it if it exists.
   *
   * @param experience Experience The Experience entity which must match.
   * @param treeNode TreeNode the TreeNode which must match.
   */
  peek( experience, treeNode ) {
    return this.optimizedHash[experience.id] && this.optimizedHash[experience.id][treeNode.id];
  }
}
