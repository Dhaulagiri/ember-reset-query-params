import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    type: {
      refreshModel: true
    },
    strings: {
      refreshModel: true
    }
  }
});
