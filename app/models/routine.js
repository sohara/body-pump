import DS from 'ember-data';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  sets: hasMany('set'),
  createdAt: attr('date', {
    defaultValue() {
      return new Date();
    }
  })
});
