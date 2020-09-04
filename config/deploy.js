/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  //see https://github.com/ember-cli-deploy/ember-cli-deploy-revision-data/issues/52
  process.env.GIT_DISCOVERY_ACROSS_FILESYSTEM=1;
  let ENV = {
    build: {
      environment: 'development'
    },
    'ssh-index': { // copy and deploy index.html
      username: 'root',
      host: 'toevla-dev.s.redpencil.io',
      port: 22,
      remoteDir: '/data/app-toevla-dev/config/frontend-toevla',
      allowOverwrite: true,
      agent: process.env.SSH_AUTH_SOCK
    },
    'rsync': { // copy assets
      host: 'root@toevla-dev.s.redpencil.io',
      port: 22,
      dest: '/data/app-toevla-dev/config/frontend-toevla',
      delete: false,
      arg:['--verbose']
    }
  };

  if (deployTarget === 'development') {
    // TODO
  }

  if (deployTarget === 'staging') {
    // TODO
  }

  if (deployTarget === 'production') {
    // TODO
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
