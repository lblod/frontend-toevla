import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { yes, no, info } from 'frontend-toevla/utils/uris/criterion-codelist';

export default class AuCriteriaItemComponent extends Component {
  // Track section state
  @tracked sectionOpen = false;

  get noUri() {
    return no;
  }

  // Open section
  @action
  openSection() {
    // Toggle section view state
    this.sectionOpen = !this.sectionOpen;
  }

  get yes() {
    return this.args.score === yes;
  }

  get no() {
    return this.args.score === no;
  }

  get info() {
    return this.args.score === info;
  }
}
