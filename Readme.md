# TEMPLATE IMPACT EVALUATOR

# Description

This repository contains a template for the Impact Evaluator function, which can be used to measure the impact of contributions to a DAO. It is based on the following [research paper](https://threebox.notion.site/Impact-Evaluators-Over-Ceramic-Data-5ac733f30a454356914b22778f512381).

The repository includes:

- an Impact Evaluator file that can be customized to suit the specific needs of the project or DAO
- a script to build a Docker container that includes the Impact Evaluator function
- a script to run Bacalhau based on the Docker image
- example commands on how to run Bacalhau directly, which enables different input option.

# Prerequisites

## Docker

- To build the Docker container that will be used buy Bacalhau, you will need to have Docker Desktop installed on your machine. You can download the installer from the [Docker website](https://www.docker.com/products/docker-desktop/).

- An account on Docker Hub is required in order to push your built images to the hub. You can create a Docker Hub account on the [Docker website](https://hub.docker.com/).

## Bacalhau

- Bacalhau is used to run the Docker container with the Impact Evaluator function. You can install Bacalhau through the [Bacalhau website](https://docs.bacalhau.org/getting-started/installation/)

## NodeJS & Yarn

- NodeJS [(Install NodeJS)](https://nodejs.org/en/download/)
- Yarn [(Install Yarn)](https://classic.yarnpkg.com/en/docs/install)

# Installation

To install the dependencies for this project, please run the command yarn install in your terminal. This command will install all the necessary packages required to run the application.

```
yarn
```

# Setup

When initially setting up the repository **and** whenever you wish to modify the Impact Evaluator function afterwards, the following actions are required:

1. Edit the Impact Evaluator function in `./ImpactEvaluator/ImpactEvaluatorFunction.ts`
2. Build and deploy a new Docker image by running the command `yarn build`

For more information on these steps, please refer to the sections below.

## Impact Evalutor Function

To implement the Impact Evaluator function, you will need to edit the file located at `./ImpactEvaluator/ImpactEvaluatorFunction.ts`.

**Please note:**

- Only make changes to the TypeScript file (.ts) and not the automatically generated JavaScript file (.js).
- The file name is case sensitive and should not be changed.

Instructions on how to edit the function can be found in the comments within the file.

## Deploy Docker

Before building and deploying your Docker image, there are a few important things to note:

- The script for building and deploying the image also includes a step for running the Impact Evaluator function locally to ensure it is functioning properly.
- When prompted for your Docker Hub username, please enter it in **all lowercase** letters.
- When prompted for the image name, please choose a name that is meaningful to you. This will be the name of the image within Docker Hub and it should be **all lowercase** letters.

To create and deploy your Docker image, run the following command:

```sh
yarn build
```

# Usage

## Script

## Bacalhau commands

## **Below Work In Progress**

## Note

Only add code in `./ImpactEvaluator/` directory. Code added outside the specified directory might not execute.

- Every time I change the IE -> build again
- Only edit .ts files, the .js files are auto generated

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

- use your Docker username
- Can be anything for the repo
- Everything lower case

## Run on bacalhau

Once you have deployed Impact Evaluator docker image, you can run it on bacalhau using the following command:

```sh
yarn run:bacalhau
```

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
