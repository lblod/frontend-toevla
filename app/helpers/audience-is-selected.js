import { inject as service } from '@ember/service';
import { helper } from '@ember/component/helper';
import { Resource } from 'ember-could-get-used-to-this';

export default class AudienceIsSelectedResource extends Resource {
  @service targetAudience;

  get audience() {
    return this.args.positional[0];
  }

  get value() {
    return this.audience && this.targetAudience.isSelected( this.audience );
  }
}
