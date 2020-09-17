import Component from '@glimmer/component';
import {editMapping} from '../../utils/custom-component-mapping';
import { getInstance, property } from '../../utils/path-instances';

export default class EditComponentsGenericComponent extends Component {
  constructor(...args){
    super(...args);
  }
  get info(){

    return editMapping(this.args.node.uri);
  }
}
