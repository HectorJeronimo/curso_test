

1) npm install mocha chai --save-dev

2) replace the script and put mocha

3) create the test folder (by default for mocha)

4) npm run test

 For install the code coverage tool we need to run the follow comand:
    npm install nyc
And then modify the package.json and put the scripts line as following:
    "test": "mocha || nyc mocha || true"




 