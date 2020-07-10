import Component from '@glimmer/component';
import {viewMapping} from '../../utils/custom-component-mapping';

export default class ViewComponentsGenericComponent extends Component {
  get info(){
    return viewMapping(this.args.node.uri);
  }
}
