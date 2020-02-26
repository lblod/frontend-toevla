import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class modal extends Component {
  // Variables
  destinationElementId =  null

  constructor() {
    super(...arguments);

    // Set wormhole destination
    if (!this.destinationElementId) {
      this.destinationElementId = 'ember-vo-appuniversum-wormhole';
    }
  }

  // Track modal state
  @tracked modalOpen = false;

  // Open modal
  @action
  openModal() {
    // Toggle modal view state
    this.modalOpen = !this.modalOpen;

    // Add body class
    document.getElementsByTagName('body')[0].classList.add("vl-w-modal-open");
  }

  // Close modal
  @action
  closeModal() {
    // Only run this action when a modal is open
    if (this.modalOpen) {
      // Close the modal
      this.modalOpen = false;

      // Remove body class when modal is disabled
      document.getElementsByTagName('body')[0].classList.remove("vl-w-modal-open");
    }
  }
}
