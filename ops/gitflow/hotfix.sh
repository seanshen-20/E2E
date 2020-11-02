#!/bin/bash
git -version &> /dev/null && echo "ok" || (echo "please go to git UI and submit pr! "; $SHELL)

echo "h"
# if [gh]; then
#     echo "success"
# else
#     echo "please go to git UI and submit pr! "
# fi
# echo "h"

$SHELL