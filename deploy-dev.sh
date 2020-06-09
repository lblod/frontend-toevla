#!/bin/sh
ember build;
scp -r ./dist/* root@toevla-dev.s.redpencil.io:/data/app-toevla-dev/toevla-app;
