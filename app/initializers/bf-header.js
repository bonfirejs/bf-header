export function initialize(container, application) {
  application.inject('component:bf-header', 'application', 'controller:application');
}

export default {
  name: 'bf-header',
  initialize: initialize
};
