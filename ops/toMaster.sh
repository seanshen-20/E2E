#!/bin/bash

git checkout master 
git merge "origin/${1:-development}"; 
gh pr create -f -B master 