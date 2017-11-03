import DS from 'ember-data';
const { attr, Model, belongsTo } = DS;

export default Model.extend({
  exercise: belongsTo('exercise'),
  routine: belongsTo('routine'),
  numberReps: attr('number'),
  createdAt: attr('date', {
    defaultValue() {
      return new Date();
    }
  })
});
