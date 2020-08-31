const packageJson = require('../../package.json');

export const environment = {
  production: true,
  envName: 'PROD',
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
