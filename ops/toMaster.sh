#!/bin/bash

# merge sha  
git checkout master 
git merge "${1:-development}" --no-ff -m "$(git config user.email) pushed to master"; 
git push 
