#!/bin/bash
set -x
node bin/run.js --100 test/${1}* --nyc-arg=--include={bin,lib}/$1.js -J
