import Component from '@glimmer/component';
import mapping from 'frontend-toevla/utils/custom-component-mapping';

export default class WidgetChildrenChildLevel2Component extends Component {
  get sortedChildren(){
    return this.args.node.children.sortBy("order");
  }

  get handlerComponent(){
    if( this.args.disableHandlerComponent )
      return null;
    else
      return mapping( this.args.node.uri );
  }
}
