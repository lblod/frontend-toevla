import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class EmbeddableWidgetController extends Controller {
  @service env

  get dataAttr() {
    return this.env.dataAttributes;
  }
}
