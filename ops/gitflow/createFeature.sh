#!/bin/bash

echo "Name Feature branch: "
read feature
git checkout -b $feature
git push -u origin $feature