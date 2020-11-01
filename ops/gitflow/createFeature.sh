#!/bin/bash
echo "Input the branch name below: "
read branch_name
git checkout -b "feature-$branch_name"
git push -u origin "feature-$branch_name"
