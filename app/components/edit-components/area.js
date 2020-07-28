import Component from '@glimmer/component';
import { getInstance } from '../../utils/path-instances';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class EditComponentsAreaComponent extends Component {
  @tracked area;

  constructor(){
    super(...arguments);
    this.initArea();
  }

  @action
  async initArea(){
    this.area = await getInstance(
      this.args.experience,
      this.args.key,
      { keyIsObject: true });
  }
}
