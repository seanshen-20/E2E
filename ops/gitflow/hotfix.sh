#!/bin/bash


git -version &> /dev/null && echo "It will submit pr to master and dev branch. " || (echo "please go to git UI and submit pr to both master and dev branch! "; $SHELL)

gh pr create -f -B master
gh pr create -f -B development
# if [gh]; then
#     echo "success"
# else
#     echo "please go to git UI and submit pr! "
# fi
# echo "h"

$SHELL