import Ember from 'ember';
import layout from '../templates/components/bf-header';

export default Ember.Component.extend({
  layout: layout,
  appName: function() {
    return Ember.String.capitalize(this.get('application.namespace.name'));
  }.property('application.namespace.name')
});
