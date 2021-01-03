import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { get } from '@ember/object';
import { sort } from '@ember/object/computed';

export default class ListImagesComponent extends Component {
  @service env;
  @tracked currentIndex = 0;
  @tracked modalOpen = false;

  //using standard ascending sort
  sortKey = ['order'];
  @sort('images', 'sortKey') sortedImages;

  get images(){
    return get(this.args.pointOfInterest, "images");
  }

  get selectedImage() {
    return get(this.sortedImages, this.currentIndex);
  }

  @action
  quickOpenImage(index) {
    this.currentIndex = index;
    this.modalOpen = true;
  }

  @action
  selectNextImage() {
    this.currentIndex = this.reflowIndex( this.currentIndex + 1 );
  }

  @action
  selectPreviousImage() {
    this.currentIndex = this.reflowIndex( this.currentIndex - 1 );
  }

  reflowIndex(idx) {
    try {
      if( idx < 0 ) {
        return this.images.length - 1;
      } else if( idx >= this.images.length ) {
        return 0;
      } else {
        return idx;
      }
    } catch (e) {
      // things haven't been set up correctly
      return 0;
    }
  }
}
