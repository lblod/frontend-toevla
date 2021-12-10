import Component from '@glimmer/component';
import { isYes, isNo, isInfo } from '../utils/uris/criterion-codelist';

/**
 * Renders an inline information element.  Consumes both @info/@check,
 * as well as @score (being X/V/Info).
 */
export default class AuCriteriaInlineComponent extends Component {
  get yes() {
    if( this.args.etns?.score ) {
      return isYes(this.args.etns?.score);
    }
    else {
      if (this.args.score) {
        return this.args.score.toLowerCase() == "v";
      } else {
        return this.args.check;
      }
    }
  }

  get no() {
    if (this.args.etns?.score) {
      return isNo( this.args.etns?.score );
    } else {
      if (this.args.score) {
        return this.args.score.toLowerCase() == "x";
      } else {
        return !this.args.check && !this.args.info;
      }
    }
  }

  get info() {
    if (this.args.etns?.score) {
      return isInfo(this.args.etns?.score);
    } else {
      if (this.args.score) {
        return this.args.score.toLowerCase() == "info";
      } else {
        return this.args.info;
      }
    }
  }

  get renderComment() {
    return 'renderComment' in this.args ? this.args.renderComment : true;
  }
}
