import Component from '@glimmer/component';

export default class ChildLevel1Component extends Component {
  get sortedChildren(){
    return this.args.node.children.sortBy("order");
  }
}
