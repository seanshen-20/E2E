#!/bin/bash

git checkout master 
git merge "${1:-development}"; 
git push 
gh pr create -f 