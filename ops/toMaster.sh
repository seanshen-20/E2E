#!/bin/bash

git checkout development
git pull
git merge "${1:-development}"; 
gh pr create -f -B master