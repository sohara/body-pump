import Component from '@ember/component';
import inject from '@ember/service';

export default Component.extend({
  init () {
    this.set('model', this.get('store').createRecord('set'));
  }
});
