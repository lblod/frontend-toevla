import { get } from '@ember/object';
import Component from '@glimmer/component';
import { getInstance, property } from '../../utils/path-instances';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class EditComponentsBooleanComponent extends Component {
  @tracked value;

  constructor(){
    super(...arguments);
    this.initValue();
  }

  @action
  async initValue(){
    const instance = await getInstance(this.args.experience, this.args.key);
    this.value = get(instance, property(this.args.key));
  }
}
