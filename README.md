# 🕊 Hark Frontend 🕊

This is the front end for the Hark Tech Test.
This is a react app bundled using Parceljs, data is retrieved using axios and react-query, and displayed graphically using Highcharts.

## Caution
Unless you would like to view an error message, please run the Hark-Backend code locally first

## Prerequisites

This application uses [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to handle package management, as such you will need to set this up if you haven't already.

## Run Locally

To run locally clone the project and enter the directory in the terminal of your choice

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

The server will run on http://localhost:1234/

## Tests

Tests have been written using jest and react-testing-library.

Run the tests

```
npm run test
```

## Improvements & known issues

There's many ways this can be improved, most notable improvements include:

- Tests have not been written for the LineGraph component
- the UI is very basic, more can be added
- I wrote the backend first, not knowing highcharts required the data to be in arrays, given the opportunitiy I would change the data structure to pass the values as arrays with a maximum of 2 values, or have the data processed in the backend and the api return a new csv file (I would need to research how to do that).
