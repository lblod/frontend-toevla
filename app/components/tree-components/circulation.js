import Component from '@glimmer/component';

export default class TreeComponentsCirculationComponent extends Component {
  get sortedChildren(){
    return this.args.node.children.sortBy("order");
  }
}
