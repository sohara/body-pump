import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('routine', params.id);
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
