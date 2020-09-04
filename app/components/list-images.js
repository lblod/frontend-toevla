import Component from '@glimmer/component';
import { get } from '@ember/object';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default class ListImagesComponent extends Component {
  //using standard ascending sort
  sortKey = ['order'];
  @sort('images', 'sortKey') sortedImages;

  get images(){
    return get(this.args.experience, "pointOfInterest.images");
  }
}
