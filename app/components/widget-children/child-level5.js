import Component from '@glimmer/component';

export default class WidgetChildrenChildLevel5Component extends Component {
  get sortedChildren(){
    return this.args.node.children.sortBy("order");
  }
}
