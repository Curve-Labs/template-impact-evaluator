# Create your own Impact Evaluator function and run it on Bacalhau

## Note
Only add code in `./ImpactEvaluator/` directory. Code added outside the specified directory might not execute.

## How to install new packages
As it is a template repository and was created to make it easier to create and deploy Impact Evaluator function that run on bacalhau.
Please use following command to install any package.
Note: If you use `yarn add` or `npm install`, docker image might break.
```sh
todo: command to install new packages that add package to package.json file and add RUN command to install the package in Dockerfile as well.
```

## Deploy
Once you have written your Impact Evaluator function, create and deploy you Docker image using following command:
```sh
yarn build
```
Note: When you build and deploy, this script will also run the Impact Evaluator locally to check if it works.

## Run on bacalhau
Once you have deployed Impact Evaluator docker image, you can run it on bacalhau using the following command
```sh
yarn run:bacalhau
```

## Testing
Currently, if you want to test your Impact Evaluator function, you need to build and run it on docker. We are working on bringing ease in testing.