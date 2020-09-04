import Component from '@glimmer/component';
import { get } from '@ember/object';
import { computed } from '@ember/object';

export default class ListImagesComponent extends Component {
  @computed('images.length')
  get previewImages(){
    if(this.images){
      return this.images.slice(0, this.args.preview);
    }
  }

  get images(){
    return get(this.args.experience, "pointOfInterest.images");
  }
}
