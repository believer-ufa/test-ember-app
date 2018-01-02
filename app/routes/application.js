import { inject } from '@ember/service';
import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  sessionAccount: inject('session-account'),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this
      .get('sessionAccount')
      .loadCurrentUser()
      .catch(() => {
        return this.get('session').invalidate()
      });
  }
});