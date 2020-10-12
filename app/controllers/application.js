import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import ENV from '../config/environment';

export default class ApplicationController extends Controller {
  @service router;

  get isIndex() {
    return this.router.currentRouteName == "index";
  }
}
