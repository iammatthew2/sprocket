import EmberRouter from '@ember/routing/router';
import config from 'sprocket/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('blog', function () {
    this.route('post', {
      path: ':post_id',
    });
  });
});
