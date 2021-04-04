import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  @service store;

  model() {
    return this.store.query('item', { include: 'all' });
  }
}
