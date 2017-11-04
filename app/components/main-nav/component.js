import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  actions: {
    navigate (route, close) {
      this.get('router').transitionTo(route).then(() => {
        close();
      });
    }
  }
});
