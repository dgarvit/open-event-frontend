import ENV from 'open-event-frontend/config/environment';

export default function() {
  this.passthrough();
  this.urlPrefix = ENV.APP.apiHost;
  this.namespace = ENV.APP.apiNamespace;
  this.passthrough('/**');
}
