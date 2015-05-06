import Ember from 'ember';
import layout from '../templates/components/bf-header';

/**
  This component includes the application name and bf-nav in a header.

  @class BfHeader
*/
export default Ember.Component.extend({
  layout: layout,
  /**
    By default, bf-header will use the application name specified when
    initializing the Ember project. To customize the displayed name, add a
    APP.bonfire.title property to ENV in config/environment.js:

    ```javascript
    var ENV = {
      APP: {
        bonfire: {
          title: 'Your App Name'
        }
      }
    };
    ```

    @property appName
    @type String
    @default application.namespace.name
    @return {String} Application name
  */
  appName: Ember.computed(function() {
    var ENV = this.container.lookupFactory('config:environment');
    if (ENV.APP && ENV.APP.bonfire && ENV.APP.bonfire.title) {
      return ENV.APP.bonfire.title;
    } else {
      return Ember.String.capitalize(ENV.APP.name);
    }
  })
});
