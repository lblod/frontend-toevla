import Application from 'frontend-toevla/app';
import config from 'frontend-toevla/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
