import Component from '@glimmer/component';

export default class WidgetChildrenChildLevel4Component extends Component {
  constructor(...args){
    super(...args);
  }
  get sortedChildren(){
    return this.args.node.children.sortBy("order");
  }
}