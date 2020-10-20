import MetersComponent from './meters';

export default class EditComponentsKilometersComponent extends MetersComponent {
  get kilometers() {
    return this.value / 1000.0;
  }
}
