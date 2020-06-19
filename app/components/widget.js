import Component from '@glimmer/component';

export default class WidgetComponent extends Component {
  get sortedChildren(){
    return this.args.tree.topLevelNodes.sortBy("order");
  }
}
