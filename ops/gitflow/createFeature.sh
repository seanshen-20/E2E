#!/bin/bash

echo "Name Feature branch: "
read feature
git checkout -b $feature origin/development 
git push -u origin $feature