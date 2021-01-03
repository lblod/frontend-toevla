import { inject as service } from '@ember/service';
import EmbeddableWidgetRoute from 'frontend-toevla/routes/embeddable-widget';

export default class WidgetsShowRoute extends EmbeddableWidgetRoute {
  @service store;
  @service nodeScoreStateManager;

  async model({ widget_id }) {
    const widget_uri = (await this.store.find("widget", widget_id)).uri;
    return await super.model({widget_uri});
  }
}
