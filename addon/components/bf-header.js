/**
* @property appName is a computed property that first checks the consuming app config/environment.js
* for APP.bonfire.title
* APP:  {
*  bonfire: {
*    title: 'Your App Name'
*  }
* }
* If this is not provided then it will fetch from application.namespace.name
*/

import Ember from 'ember';
import layout from '../templates/components/bf-header';

export default Ember.Component.extend({
  layout: layout,
  appName: function() {
    var config = this.container.lookupFactory('config:environment');
    if (Ember.isEmpty(config.APP.bonfire) || Ember.isEmpty(config.APP.bonfire.title) ) {
      return Ember.String.capitalize(this.get('application.namespace.name'));
    } else {
      return configTitle;
    }
  }.property('application.namespace.name')
});
