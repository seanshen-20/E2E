#!/bin/bash
git checkout development
git pull 
gh pr create -f -B development 