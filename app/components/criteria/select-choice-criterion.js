import { get } from '@ember/object';
import Component from '@glimmer/component';
import { whenShouldDisplay } from '../../utils/should-display';

export default class CriteriaSelectChoiceCriterionComponent extends Component {
  get templateString() {
    whenShouldDisplay( get(this, 'args.value.title') );
  }
}
