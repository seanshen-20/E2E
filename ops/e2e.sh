#!/bin/bash -eu
echo "Running Cypress e2e tests headlessly"
docker run -it \
    -v $(pwd)/cypress:/e2e/cypress \
    -v $(pwd)/cypress.json:/e2e/cypress.json:ro \
    -v ~/.aws/credentials:/root/.aws/credentials \
    -e CYPRESS_TAX_EMAIL=archietest.user1propel@gmail.com\
    -e CYPRESS_TAX_PASSWORD=Myob1234\
    -w /e2e cypress/included:3.4.0 