#!/bin/bash

git checkout master 
git merge "${1:-development}"; 
gh pr create -f -B master 