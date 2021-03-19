import Route from '@ember/routing/route';

export default class ContentRoute extends Route {
  model() {
    console.log('one two three');
    return [{ data: 'nice' }];
  }
}
