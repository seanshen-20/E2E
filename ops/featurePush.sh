#!/bin/bash

git checkout "feature-${1:-1}" 
git add .
git commit -m "${2:-feature-${1:-1}-$(uuidgen)}"
gh pr create -f -B 