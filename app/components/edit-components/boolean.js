import { get } from '@ember/object';
import Component from '@glimmer/component';
import { getInstance, property } from '../../utils/path-instances';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class EditComponentsBooleanComponent extends Component {
  @tracked value;

  constructor(...args){
    super(...args);
    this.updateValue();
  }

  @action
  async updateValue(){
    try {
      const instance = await getInstance(this.args.subject, this.args.key, { create: false });
      const res = await get( instance, property(this.args.key) );
      this.value = res;
    } catch (e) {
      // eslint-disable-next-line no-console
      if( console && console.debug ) {
        // eslint-disable-next-line no-console
        console.debug(e);
      }
    }
  }
}
