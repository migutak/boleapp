#!/bin/bash

# build --prod
ng build --prod

#upload files
aws s3 cp ./dist/boleapp s3://boleapp --recursive --acl public-read