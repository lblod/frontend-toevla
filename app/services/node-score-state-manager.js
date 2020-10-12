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
      const experienceHash = optimizedHash[etns.experience.id] || {};
      experienceHash[etns.score.id] = etns;
      optimizedHash[etns.experience.id] = experienceHash;
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
    this.optimizedHash[etns.experience.id] = this.optimizedHash[etns.experience.id] || {};
    this.optimizedHash[etns.experience.id][etns.treeNode.id] = etns;
  }

  /**
   * Fetches a single entity, either from cache or by querying and storing it.
   *
   * @param experience Experience The Experience entity which must match.
   * @param treeNode TreeNode the TreeNode which must match.
   */
  async fetch( experience, treeNode ) {
    if( this.peek( experience, treeNode ) ) {
      return this.peek( experience, treeNode );
    } else {
      const experienceTreeNodeScore =
        (await this
         .store
         .query('experience-tree-node-score',
                { filter:
                  { "experience[:id:]": experience.id,
                    "tree-node[:id:]": treeNode.id }
                }))
        .firstObject;
      if( experienceTreeNodeScore )
        this.register( experienceTreeNodeScore );

      return this.experienceTreeNodeScore;
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
