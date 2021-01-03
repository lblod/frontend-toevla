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
   * Hash with [subject_id][tree_node_id].
   */
  optimizedHash = {};

  /**
   * Re-indexes all tree-node-score entities currently known by Ember
   * Data.
   *
   * Assumes the link to TreeNode and Subject have been fetched for
   * all scores.
   */
  reindex() {
    const optimizedHash = {};

    const knownEtnss =
      this
      .store
      .peekAll('experience-tree-node-score');

    knownEtnss.forEach( (etns) => {
      const subjectHash = optimizedHash[get(etns, "subject.id")] || {};
      subjectHash[get(etns, "score.id")] = etns;
      optimizedHash[get(etns, "subject.id")] = subjectHash;
    });

    this.optimizedHash = optimizedHash;
  }

  async fetchAll(subject) {
    await this.store.query( 'experience-tree-node-score',
                         { "filter[subject][:id:]": subject.id,
                           include: "tree-node,subject",
                           "page[size]": 1500 });
    this.reindex();
  }

  /**
   * Registers a new entity.  Use this when you have just fetched a single entity.
   *
   * Assumes the TreeNode and Subject have been fetched too.
   *
   * @param subjectTreeNodeScore TreeNodeScore The score to add to the hash.
   */
  register( subjectTreeNodeScore ) {
    const etns = subjectTreeNodeScore;
    this.optimizedHash[get(etns, "subject.id")] = this.optimizedHash[get(etns, "subject.id")] || {};
    this.optimizedHash[get(etns, "subject.id")][get(etns, "treeNode.id")] = etns;
  }

  registerNotExists( subject, treeNode ) {
    if( subject && treeNode ) {
      this.optimizedHash[ subject.id ] = this.optimizedHash[ subject.id ] || {};
      this.optimizedHash[ subject.id ][ treeNode.id ] = null;
    }
  }

  isRegistered( subject, treeNode ) {
    return this.optimizedHash[ subject.id ] && treeNode.id in this.optimizedHash[ subject.id ];
  }

  /**
   * Fetches a single entity, either from cache or by querying and storing it.
   *
   * @param subject Subject The Subject entity which must match.
   * @param treeNode TreeNode the TreeNode which must match.
   */
  async fetch( subject, treeNode ) {
    if( this.isRegistered( subject, treeNode ) ) {
      return this.peek( subject, treeNode );
    } else if( !subject || !treeNode || !subject.id || !treeNode.id ) {
      return null;
    } else {
      try {
        const subjectTreeNodeScores =
              (await this
               .store
               .query('experience-tree-node-score',
                      { "filter[subject][:id:]": subject.id,
                        "filter[tree-node][:id:]": treeNode.id,
                        include: "subject,tree-node"
                      }));

        const subjectTreeNodeScore = subjectTreeNodeScores.firstObject;
        if( subjectTreeNodeScore )
          this.register( subjectTreeNodeScore );
        else
          this.registerNotExists( subject, treeNode );
        return subjectTreeNodeScore;
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
   * @param subject Subject The Subject entity which must match.
   * @param treeNode TreeNode the TreeNode which must match.
   */
  peek( subject, treeNode ) {
    return this.optimizedHash[subject.id] && this.optimizedHash[subject.id][treeNode.id];
  }
}
