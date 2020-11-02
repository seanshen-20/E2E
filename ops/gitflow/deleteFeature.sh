#!/bin/bash

echo "Name Feature branch: "
read feature
git checkout development
git branch -D $feature
git push origin --delete $feature