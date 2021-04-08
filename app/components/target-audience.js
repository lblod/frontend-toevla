import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class TargetAudienceComponent extends Component {
  @service targetAudience;

  @action
  toggleSelected( audience ) {
    this.targetAudience.toggleSelected( audience );
  }
}
