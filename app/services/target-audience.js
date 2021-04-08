import { tracked } from '@glimmer/tracking';
import { TrackedSet } from 'tracked-maps-and-sets';
import Service, { inject as service } from '@ember/service';

export default class TargetAudienceService extends Service {
  @service store;

  @tracked audiences = [];
  selectedAudiences = new TrackedSet();

  constructor() {
    super(...arguments);
    this.setupAudiences();
  }

  async setupAudiences() {
    const conceptScheme = await this.store.query('concept-scheme', {
      "filter[:uri:]": "http://data.toevla.org/concept-schemes/targetAudiences",
      include: "top-level-nodes"
    });

    this.audiences = await conceptScheme.firstObject.topLevelNodes;
  }

  toggleSelected( audience ) {
    if( this.isSelected( audience ) )
      this.selectedAudiences.delete( audience );
    else
      this.selectedAudiences.add( audience );
  }

  isSelected( audience ) {
    return this.selectedAudiences.has( audience );
  }
}
