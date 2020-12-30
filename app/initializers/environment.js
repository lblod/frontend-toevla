import ENV from 'frontend-toevla/config/environment';

export function initialize( application ) {
  const env = Object.assign({}, ENV, application.ENV);
  application.register('service:env', env, { instantiate: false, singleton: true });
}

export default {
  initialize
};
