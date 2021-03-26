import { get } from '@ember/object';
import Component from '@glimmer/component';

export default class CriteriaSelectChoiceCriterionComponent extends Component {
  get templateString() {
    const title = get(this, 'args.value.title') || "geen weergave";
    const isHidden = ["undefined", "geen weergave"].includes( title.toLowerCase() );
    return !isHidden && title;
  }
}
