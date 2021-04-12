import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { tracked } from "@glimmer/tracking";

export default class TargetAudienceComponent extends Component {
  @service targetAudience;

  @action
  toggleSelected( audience ) {
    this.targetAudience.toggleSelected( audience );
  }

  // Create a dropdown ID
  dropdownId = 'dropdown-' + guidFor(this);

  // Track dropdown state
  @tracked dropdownOpen = false;

  // Open dropdown
  @action
  openDropdown() {
    // Toggle dropdown view state
    if (!this.dropdownOpen)
      this.dropdownOpen = true;
  }

  @action
  closeDropdown() {
    // Toggle dropdown view state
    if (this.dropdownOpen)
      this.dropdownOpen = false;
  }

  @action
  toggleDropdown() {
    this.dropdownOpen = ! this.dropdownOpen;
  }
}
