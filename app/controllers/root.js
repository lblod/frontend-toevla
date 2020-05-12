import Controller from '@ember/controller';

export default class RootController extends Controller {
  constructor(...args){
    super(...args);
    this.dataResource=document.getElementById('toevla-widget').getAttribute("data-resource");
  }
  dataResource;
}
