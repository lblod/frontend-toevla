import { get } from '@ember/object';
import Component from '@glimmer/component';
import { getInstance, property } from '../../utils/path-instances';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class EditComponentsAreaComponent extends Component {
  constructor(...args){
    super(...args);
    this.updateValue();
  }
  @action
  async updateValue(){
    try {
      const instance = await getInstance(this.args.experience, this.args.key, { create: false });
      this.value = await get( instance, property( this.args.key ) );
    } catch (e) {
      console.debug(e);
    }
  }
  @tracked value;
}
