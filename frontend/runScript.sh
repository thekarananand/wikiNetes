#!/bin/bash

if [ ! -f ".alreadyBuild" ]; then
  touch .alreadyBuild
  npm run build
fi

npm run start