import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let routine = this.get('store').findRecord('routine', params.id, {
      include: 'sets'
    });
    return routine;
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
    saveSet(set) {
      set.save().then(() => {
        set.get('routine').then(routine => {
          routine.save().then(() => {
            this.controller.set('newSet', null);
          });
        });
      });
    }
  }
});
