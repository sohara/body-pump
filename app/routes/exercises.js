import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('exercise');
  },

  actions: {
    addExercise () {
      this.controller.set('dialogShowing', true);
      let exerciseModel = this.get('store').createRecord('exercise');
      this.controller.set('exerciseModel', exerciseModel);
    },

    closeDialog () {
      this.controller.set('dialogShowing', false);
    },

    saveExercise(exercise) {
      exercise.save().then(() => {
        this.controller.set('dialogShowing', false);
      });
    }
  }
});
