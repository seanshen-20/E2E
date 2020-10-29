#!/bin/bash

git pull
git checkout "${1:-development}"; 
gh pr create -f -B master