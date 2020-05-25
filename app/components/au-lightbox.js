import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import "wicg-inert";

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

    // Add inert
    const el = document.querySelectorAll("#ember172 *");

    el.forEach((e) => {
      e.inert = true;
    });
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

      // Remove inert
      const el = document.querySelectorAll("#ember172 *");

      el.forEach((e) => {
        e.inert = false;
      });
    }

    // Focus button after close
    document.querySelectorAll('.au-w-lightbox__button')[0].focus();
  }
}
