#!/bin/bash

# $1 is commit message 
git add .
git commit -m "${1:-feature-$(uuidgen)}"
git push 
gh pr create -f -B development 