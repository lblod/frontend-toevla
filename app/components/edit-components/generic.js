import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import {editMapping} from '../../utils/custom-component-mapping';

export default class EditComponentsGenericComponent extends Component {
  @service targetAudience;

  get info(){
    return editMapping(this.args.node.uri);
  }

  get matchesTargetAudience() {
    return this.targetAudience.shouldRenderScore( this.args.node.simplifiedTargetAudiences );
  }
}
