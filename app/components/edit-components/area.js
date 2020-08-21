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
  updateValue(){
    getInstance(this.args.experience, this.args.key).then(function(res1){
      this.value=res1[property(this.args.key)].then(function(res2){
        this.value=res2;
      }.bind(this));
    }.bind(this));
  }
  @tracked value;
}
