// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const packageJson = require('../../package.json');

export const environment = {
  production: false,
  envName: 'DEV',
  i18nPrefix: '',
  appName: 'Angular Cli Seed',
  appShortName: 'angular',
  appPrefix: 'ACS',
  domain: {
    app: 'http://localhost:4200'
  },
  API: 'http://localhost:8000/api',
  versions: {
    app: packageJson.version
  },
  firebaseConfig: {
    apiKey: 'AIzaSyD1igxu50uDthyALgTgE1hfrqlMs1Y8iTo',
    authDomain: 'moli-food.firebaseapp.com',
    databaseURL: 'https://moli-food.firebaseio.com',
    projectId: 'moli-food',
    storageBucket: 'moli-food.appspot.com',
    messagingSenderId: '683825652454',
    appId: '1:683825652454:web:9e1130432c435a46ced127'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
