import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class AuLightbox extends Component {
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
    document.getElementsByTagName('html')[0].classList.add("au-w-modal-open");
  }

  // Close modal
  @action
  closeModal() {
    // Only run this action when a modal is open
    if (this.modalOpen) {
      // Close the modal
      this.modalOpen = false;

      // Remove html class when modal is disabled
      document.getElementsByTagName('html')[0].classList.remove("au-w-modal-open");
    }
  }
}