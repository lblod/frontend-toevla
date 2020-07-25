import Component from '@glimmer/component';
import { getInstance, property } from '../../utils/path-instances';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditComponentsStringComponent extends Component {
  constructor(...args){
    super(...args);
    this.updateValue();
  }
  @action
  updateValue(){
    getInstance(this.args.experience, this.args.key).then(function(res){
      this.value=res[property(this.args.key)];
    }.bind(this));
  }
  @tracked value;
}
