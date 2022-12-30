# Opinion Ate

[![Netlify Status](https://api.netlify.com/api/v1/badges/b0252632-26f2-490a-ae0c-2fbffac3d323/deploy-status)](https://app.netlify.com/sites/chips-opinion-ate/deploys)
[![opinion-ate-js](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/bups7t/main&style=flat&logo=cypress)](https://cloud.cypress.io/projects/bups7t/runs)

## Description

An app for tracking reviews of dishes at different restaurants.

Production site: https://chips-opinion-ate.netlify.app/

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)

## Installation

Dependencies are locked with a `yarn.lock` file, so please use `yarn` instead of `npm` to install them.

`yarn install`

## Usage

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the Jest (Unit) test runner in the interactive watch mode.

### `yarn cypress`

Launches the Cypress (E2E) test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Technologies

- Build Tooling: Create React App
- State Management: Redux
- State Management Asynchrony: Redux Thunk
- HTTP Client: Axios
- UI Components: MUI
- Test Runner: Jest
- Component Tests: React Testing Library
- End-to-End Tests: Cypress
- Continuous Integration: GitHub Actions
- Deployment: Netlify

## Credits

This project is based on the book _Outside-In React Development_ by Josh Justice.
