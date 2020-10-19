import { set } from '@ember/object';
import Component from "@glimmer/component";
import { action } from "@ember/object";
import "wicg-inert";
import exposedState from 'frontend-toevla/decorators/exposed-state';

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

  @exposedState modalOpen;

  // Open modal
  @action
  openModal() {
    // Toggle modal view state
    set( this, "modalOpen", !this.modalOpen );

    // Add body class
    document.getElementsByTagName('html')[0].classList.add("au-w-modal-open");

    // Add inert
    const el = document.querySelectorAll("body > .ember-view *");

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
      set(this, "modalOpen", false);

      // Remove html class when modal is disabled
      document.getElementsByTagName('html')[0].classList.remove("au-w-modal-open");
    }

    // Remove inert
    const el = document.querySelectorAll("body > .ember-view *");

    el.forEach((e) => {
      e.inert = false;
    });

    // Focus button after close
    document.querySelectorAll('.au-w-lightbox__button')[0].focus();
  }
}
