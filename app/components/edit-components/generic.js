import Component from '@glimmer/component';
import {editMapping} from '../../utils/custom-component-mapping';

export default class EditComponentsGenericComponent extends Component {
  get info(){
    return editMapping(this.args.node.uri);
  }
}
