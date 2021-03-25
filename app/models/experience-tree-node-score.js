import { isEmpty } from '@ember/utils';
import Model from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default class ExperienceTreeNodeScoreModel extends Model {
  @attr('string') score;
  @attr('string') comment;
  @attr('string') commentLinkText;
  @attr('string') commentLinkUrl;

  @belongsTo('scorable', { polymorphic: true }) scorable;
  @belongsTo('concept') treeNode;

  get hasComment() {
    return !isEmpty(this.comment)
      || !isEmpty(this.commentLinkUrl);
  }
}
