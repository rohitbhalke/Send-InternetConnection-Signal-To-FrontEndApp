/**
 * Created by rbo2913 on 05/01/18.
 */
var firebase = require('firebase');
var env = process.env;
var config = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    databaseURL: env.databaseURL,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId
};
var fire = firebase.initializeApp(config);

module.exports = fire;

