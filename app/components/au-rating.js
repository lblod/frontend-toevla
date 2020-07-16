import Component from '@glimmer/component';

export default class AuRating extends Component {
  get rating() {
    if (this.args.rating == "1")
      return "toegankelijke locatie";
    if (this.args.rating == "2")
      return "goed toegankelijke locatie";
    if (this.args.rating == "3")
      return "zeer goed toegankelijke locatie";
    if (this.args.rating == "4")
      return "uitstekend toegankelijke locatie";
    return "";
  }
}
