import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    transitionToFeedRoute() {
      this.transitionToRoute('feed')
    }
  }
});