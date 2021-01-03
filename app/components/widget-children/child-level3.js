import Component from '@glimmer/component';

export default class WidgetChildrenChildLevel3Component extends Component {
  get sortedChildren(){
    return this.args.node.children.sortBy("order");
  }
}
