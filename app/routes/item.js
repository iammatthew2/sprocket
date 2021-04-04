import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  @service store;

  model() {
    // console.log(this.store.findAll('pancakes'));
    return [
      { title: 'Ember Roadmap' },
      { title: 'Accessibility in Ember' },
      { title: 'EmberConf Recap' },
    ];
  }
}
