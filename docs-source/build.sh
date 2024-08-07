#!/bin/bash

set -e

cd ../localtron
swag init
cd ../docs-source
cp ../localtron/docs/swagger.yaml examples/singulatron.yaml
yarn clean-api-docs singulatron && yarn gen-api-docs singulatron
npm run build
rm -rf ../docs/*
cp CNAME ../docs/CNAME
cp -r ./build/* ../docs/