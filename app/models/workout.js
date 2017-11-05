import DS from 'ember-data';
const { attr, hasMany, Model, belongsTo } = DS;

export default DS.Model.extend({
  routine: belongsTo('routine'),
  createdAt: attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  completedAt: attr('date')
});
