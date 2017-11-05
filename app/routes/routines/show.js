import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('routine', params.id, {
      include: 'sets'
    });
  },

  setupController (controller) {
    this._super(...arguments);
    let exercises = this.get('store').findAll('exercise');
    controller.set('exercises', exercises);
  },


  actions: {
    addSet(model) {
      let set = this.get('store').createRecord('set', {
        routine: model
      });
      this.controller.set('newSet', set);
    },


    saveSet(set, model) {
      RSVP.all([ set.save(), model.save() ]).then(() => {
        this.controller.set('newSet', null);
      });
    }
  }
});
