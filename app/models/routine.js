import DS from 'ember-data';
import { computed } from '@ember/object';
const { attr, hasMany, Model } = DS;

export default Model.extend({
  name: attr('string'),
  sets: hasMany('set'),
  createdAt: attr('date', {
    defaultValue() {
      return new Date();
    }
  }),

  totalSets: computed('sets.@each.numberSets',
    function() {
      return this.get('sets').reduce((accum, set) => {
        return accum + set.get('numberSets');
      }, 0);
    })
});
