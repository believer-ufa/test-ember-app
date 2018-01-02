import { inject } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  session: inject('session'),

  actions: {

    authenticateWithOAuth2() {
      let { identification, password } = this.getProperties('identification', 'password');

      this
        .get('session')
        .authenticate('authenticator:oauth2', identification, password)
        .then(() => {
          // Closure actions are not yet available in Ember 1.12
          // eslint-disable-next-line ember/closure-actions
          this.sendAction('onSuccess');
        })
        .catch(reason => {
          this.set('errorMessage', reason.error);
        });
    },

  }
});