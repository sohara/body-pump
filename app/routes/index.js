import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);
    let routines = this.get('store').findAll('routine');
    controller.set('routines', routines);
  },

  model () {
    return this.get('store').findAll('workout').then(workouts => {
      let model = workouts.find(workout => !workout.get('completedAt'));
      return model;
    });
  },

  actions: {
    startWorkout (routine) {
      let model = this.get('store').createRecord('workout', {
        routine: routine
      });
      console.log('routine', routine.get('name'));
      model.save().then(() => {
        this.controller.set('model', model);
      });
    }
  }
});
