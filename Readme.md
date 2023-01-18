# Create your own Impact Evaluator function and run it on Bacalhau

## Note
Only add code in `./ImpactEvaluator/` directory. Code added outside the specified directory might not execute.

## Prerequisites
1. Docker Desktop is installed and running. [(Install Docker Desktop Now)](https://www.docker.com/products/docker-desktop/)
2. Bacalhau is installed. [(Install Bacalhau Now)](https://docs.bacalhau.org/getting-started/installation)
3. Have an account on Docker Hub. [(Create account here)](https://hub.docker.com/)
4. NodeJS [(Install NodeJS now)](https://nodejs.org/en/download/)

## Write your first Impact Evaluator function
The file name `./ImpactEvaluator/ImpactEvaluatorFunction.ts` is case senstivie and shouldn't be changed.
Write your impact evaluator logic inside the defined `impactEvaluatorFunction` function.
If you want to make it modular, you can add more files and function anythwere inside `./ImpactEvaluator/` directory.

## Deploy
Once you have written your Impact Evaluator function, create and deploy you Docker image using following command:
```sh
yarn build
```
Note: When you build and deploy, this script will also run the Impact Evaluator locally to check if it works.

## Run on bacalhau
Once you have deployed Impact Evaluator docker image, you can run it on bacalhau using the following command:
```sh
yarn run:bacalhau
```
When you run the above command, docker image will be executed on bacalhau and the results will be downloaded in `./results` directory. This directory is ignored by git.
Note: Following command expects you to input two files: `data.json` & `trustedSeed.json`. (Case Sensitive file names)

## Run with multiple inputs
To run docker image on bacalhau with multiple inputs, use following command:
### HTTPs inputs
```sh
bacalhau docker run -u $INPUT_1 -u $INPUT_2 ..... -u $INPUT_X $DOCKER_IMAGE
```

### IPFS inputs
```sh
bacalhau docker run --inputs $IPFS_CID_1 --inputs $IPFS_CID_2 ..... --inputs $IPFS_CID_X $DOCKER_IMAGE
```


## How to install new packages
As it is a template repository and was created to make it easier to create and deploy Impact Evaluator function that run on bacalhau.
Please use following command to install any package.
Note: If you use `yarn add` or `npm install`, docker image might break.
```sh
todo: command to install new packages that add package to package.json file and add RUN command to install the package in Dockerfile as well.
```

## Testing
Currently, if you want to test your Impact Evaluator function, you need to build and run it on docker. We are working on bringing ease in testing.