import Component from '@glimmer/component';

export default class ChildLevel3Component extends Component {
  get sortedChildren(){
    return this.args.node.children.sortBy("order");
  }
}
