#!/bin/bash

git checkout master 
git merge "${1:-development}"; echo "$a"; 