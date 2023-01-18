# TEMPLATE IMPACT EVALUATOR

## Description

This repository contains a template for the Impact Evaluator function, which can be used to measure the impact of contributions to a DAO. It is based on the following [research paper](https://threebox.notion.site/Impact-Evaluators-Over-Ceramic-Data-5ac733f30a454356914b22778f512381).

The repository includes:

- an Impact Evaluator file that can be customized to suit the specific needs of the project or DAO
- a script to build a Docker container that includes the Impact Evaluator function
- a script to run Bacalhau based on the Docker image
- example commands on how to run Bacalhau directly, which enables different input option.

A video guide on how to run the Impact Evaluator can be accessed via [this link](https://www.loom.com/share/6cf0ad08ae2b424cb7a5d072c29811d1).

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Impact Evalutor Function](#impact-evalutor-function)
- [Build and Deploy](#build-and-deploy)
- [Usage](#usage)
- [Testing](#testing)

## Getting Started

To utilize this template, **please create a fork of the template** repository on Github.

After creating a fork, please clone the repository to your computer.

## Prerequisites

### Docker

- To build the Docker container that will be used buy Bacalhau, you will need to have Docker Desktop installed on your machine. You can download the installer from the [Docker website](https://www.docker.com/products/docker-desktop/).

- An account on Docker Hub is required in order to push your built images to the hub. You can create a Docker Hub account on the [Docker website](https://hub.docker.com/).

### Bacalhau

- Bacalhau is used to run the Docker container with the Impact Evaluator function. You can install Bacalhau through the [Bacalhau website](https://docs.bacalhau.org/getting-started/installation/)

### NodeJS & Yarn

- NodeJS [(Install NodeJS)](https://nodejs.org/en/download/)
- Yarn [(Install Yarn)](https://classic.yarnpkg.com/en/docs/install)

## Installation

To install the dependencies for this project, please run the command yarn install in your terminal. This command will install all the necessary packages required to run the application.

```
yarn
```

## Impact Evalutor Function

When initially setting up the repository **and** whenever you wish to modify the Impact Evaluator function afterwards, the following actions are required:

1. Edit the Impact Evaluator function in `./ImpactEvaluator/ImpactEvaluatorFunction.ts`
2. Build and deploy a new Docker image by running the command `yarn build`

### Custom Logic

To implement the Impact Evaluator function, you will need to edit the file located at `./ImpactEvaluator/ImpactEvaluatorFunction.ts`.

**Please note:**

- Only make changes to the TypeScript file (.ts) and not the automatically generated JavaScript file (.js).
- The file name is case sensitive and should not be changed.

Instructions on how to edit the function can be found in the comments within the file.

## Build and Deploy

Before building and deploying your Docker image, there are a few important things to note:

- The script for building and deploying the image also includes a step for running the Impact Evaluator function locally to ensure it is functioning properly.
- When prompted for your Docker Hub username, please enter it in **all lowercase** letters.
- When prompted for the image name, please choose a name that is meaningful to you. This will be the name of the image within Docker Hub and it should be **all lowercase** letters.

To create and deploy your Docker image, run the following command:

```sh
yarn build
```

## Usage

After successfully deploying the Impact Evaluator Docker image, it can be run on Bacalhau.

To facilitate the usage of the Impact Evaluator, a script has been provided to guide you through the process.

### Script

Before running the script, please keep in mind the following:

- The script will prompt you to provide the type of processor used on the machine.
- The script will also ask for your Docker Hub username and the name of the Docker image. Please ensure that you use the same username and image name that you provided during the building Docker image step.
- **IMPORTANT:** The script expects a `JSON` formated type stored on IPFS. For more information on the type of input that is expected within each member, please see the comments within the `./ImpactEvaluator/ImpactEvaluatorFunction.ts` file. The files stored on IPFS should be formatted in the following way:

```JSON
{
  "data": {},
  "trustedSeed": [],
  "previousRewards": "",
  "otherData": {},
}
```

- Once you have provided the above information, the script will present you with several input options to choose from. If you plan to use an IPFS gateway, please select the **HTTPS** option. Otherwise, select the **IPFS** option. The remaining 3 options are for testing purposes and use mocked data.

To execute the Impact Evaluator, run the following command:

```sh
yarn run:bacalhau
```

### Output

Upon executing the command, the Docker image will be run on Bacalhau and the results will be saved in the `./results` directory. Within this directory, you will find a subdirectory named `combined_results/` which contains the data that can be used as input for other processes. It's worth noting that this directory is ignored by git.

## Testing

At the moment, in order to test your Impact Evaluator function, it needs to be built and run within a Docker container. We are working on providing a more streamlined testing process.
