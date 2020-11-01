#!/bin/bash

# merge sha 
# how to submit pr?
echo "unmerged branch to dev:"
printf "%-10s \n" "$(git branch --no-merged development 2>&1)"

echo "merged branch to dev:"
printf "%-10s \n" "$(git branch --merged development 2>&1)"

# git push origin --delete PRCTAX-2251-E2E-UI-TAX-NOTICE-UPDATE
# gh pr create -d -f -B master 

# git checkout -b TestTest
# git push -u origin TestTest
# gh pr close 294 -d 
# git push origin --delete TestTest
# git branch -D TestTest