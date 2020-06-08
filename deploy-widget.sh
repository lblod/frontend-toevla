#!/bin/sh
ember build;
ember build --environment production;
scp -r /home/sergey/Desktop/toevla-widget/frontend-toevla-master/dist/* root@toevla-dev.s.redpencil.io:/data/app-toevla-embed-experiment/toevla-app/;
