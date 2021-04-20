import { action } from '@ember/object';
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
      "filter[:uri:]": "http://data.toevla.org/concept-schemes/simplifiedTargetAudiences",
      include: "top-level-nodes"
    });

    this.audiences = await conceptScheme.firstObject.topLevelNodes;
  }

  toggleSelected(audience) {
    if (this.isSelected(audience))
      this.selectedAudiences.delete(audience);
    else
      this.selectedAudiences.add(audience);
  }

  isSelected(audience) {
    return this.selectedAudiences.has(audience);
  }

  get shouldApply() {
    return this.selectedAudiences.size > 0;
  }

  /**
   * Returns truethy iff some filters are currently being applied.
   */
  get hasSelectedFilters() {
    return this.selectedAudiences.size > 0;
  }

  /**
   * Removes currently selected target audiences.
   */
  @action
  resetFilters() {
    this.selectedAudiences.clear();
  }

  anySelected(audiences) {
    return !!audiences.any(this.isSelected.bind(this));
  }

  get selectedArray() {
    return [...this.selectedAudiences];
  }

  /**
   * Indicates the current settings state a score should be rendered
   * when it has the supplied audiences applied.  Note that this may
   * yield a positive answer when no target audiences are supplied,
   * being when no target audiences are selected.
    */
  shouldRenderScore(audiences) {
    return !this.shouldApply || this.anySelected(audiences);
  }
}
