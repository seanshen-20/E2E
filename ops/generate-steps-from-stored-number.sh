#!/bin/bash

# On the other hand if your script is a simple sequential list of commands to be run one after another, and if you want the script to terminate if any one of those fail, then sticking set -e at the top would be exactly what you would want to do to keep your script simple and uncluttered. A perfect example of this would be if you're creating a script to compile a set of sources and you want the compile to stop after the first file with errors is encountered.
set -e

steps_count=$(buildkite-agent meta-data get generated-number)

buildkite-agent meta-data set steps-count "$steps_count"

echo "steps:"
for((i=0;i<steps_count;i++));
do
  cat <<YAML
- label: "$i"
  command: ./ops/generate-and-store-number.sh $i
YAML
done
