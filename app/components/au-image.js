import Component from "@ember/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuImage extends Component {
  @tracked canShow = true;

  @action toggleImage() {
    this.canShow = !this.canShow
  }
}
