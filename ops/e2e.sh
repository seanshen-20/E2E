#!/bin/bash -eu
echo "Running Cypress e2e tests headlessly"
docker run -it \
    -v $PWD:/e2e \
    -v $PWD/cypress/cypress.json:/e2e/cypress.json \
    -v ~/.aws/credentials:/root/.aws/credentials \
    -e CYPRESS_TAX_EMAIL=archietest.user1propel@gmail.com\
    -e CYPRESS_TAX_PASSWORD=Myob1234\
    -w /e2e cypress/included:5.3.0