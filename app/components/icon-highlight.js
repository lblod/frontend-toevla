import { get } from '@ember/object';
import Component from '@glimmer/component';

export default class IconHighlightComponent extends Component {
  get sortedIcons() {
    const icons = get( this.args.pointOfInterest, "summaryIcons" );
    if( icons )
      return icons.sortBy("order");
    else
      return null;
  }
}
