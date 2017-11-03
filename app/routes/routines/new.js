import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').createRecord('routine');
  },

  actions: {
    save (model) {
      model.save().then(() => {
        this.transitionTo('routines');
        console.log('saved!', model.get('name'));
      });
    }
  }
});