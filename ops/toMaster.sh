#!/bin/bash

git pull
git checkout master 
git merge "${1:-development}"; 
git push 
gh pr create -f -B master