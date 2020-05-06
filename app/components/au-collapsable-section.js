import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuCollapsableSection extends Component {
  // Track section state
  @tracked sectionOpen = false;

  // Open section
  @action
  openSection() {
    // Toggle section view state
    this.sectionOpen = !this.sectionOpen;
  }
}
