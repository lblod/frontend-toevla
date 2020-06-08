#!/bin/sh
ember build;
ember build --environment production;
scp -r ./dist/* root@toevla-dev.s.redpencil.io:/data/app-toevla-embed-experiment/toevla-app/;
