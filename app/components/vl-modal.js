import Component from "@ember/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class modal extends Component {
  // Variables
  destinationElementId =  null
  // attributeBindings = ['aria-label', 'tabindex', 'hidden']

  constructor(options) {
    super(options);

    // A11Y enhancements draft
    this.enhance();

    // Set wormhole destination
    if (!this.get('destinationElementId')) {
      this.set('destinationElementId', 'ember-vo-appuniversum-wormhole');
    }
  }

  // A11Y enhancements draft
  async enhance() {
    // Select all modals
    // var modal = document.querySelectorAll('.vl-w-modal');

    // Hide modals on load
    // modal.forEach(function(el){
    //   el.setAttribute('hidden', true);
    // });
  }

  // Track modal state
  @tracked modalState = false;

  @action toggleModal() {
    // Toggle modal view state
    this.modalState = !this.modalState;

    // Add body class when modal is active
    document.getElementsByTagName('body')[0].classList.toggle("vl-w-modal-open");

  }

  @action closeModal() {
    // Toggle modal view state
    this.modalState = false;

    // Remove body class when modal is disabled
    document.getElementsByTagName('body')[0].classList.remove("vl-w-modal-open");
  }
}
