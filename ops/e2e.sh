#!/bin/bash -eu
echo "Running Cypress e2e tests headlessly"
# docker run -it \
#     -v $PWD/cypress:/e2e/cypress \
#     -v $PWD/cypress.json:/e2e/cypress.json \
#     -v ~/.aws/credentials:/root/.aws/credentials \
#     -e CYPRESS_TAX_EMAIL=archietest.user1propel@gmail.com\
#     -e CYPRESS_TAX_PASSWORD=Myob1234\
#     -w /e2e cypress/included:5.3.0

SSM_NAMESPACE=/bk/taxmanager-dev
# export MS=$(aws ssm get-parameters --name $SSM_NAMESPACE/shell-auth-myob-clientSecret --with-decryption --query "Parameters[0].Value" --region ap-southeast-2|sed -e 's/\"//g')
export CYPRESS_TAX_EMAIL=archietest.user1propel@gmail.com
export CYPRESS_TAX_PASSWORD=Myob1234  
npm install cypress@5.4.0
npm run cy:run