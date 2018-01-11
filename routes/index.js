var express = require('express');
var router = express.Router();
var fire = require('./firebase');

sendLightStatus();

async function sendLightStatus() {
    var db = fire.database().ref();
    let date = new Date();
    let lightStatus = {
        "isLightOn" : true,
        "syncTime" : date.toString()
    };
    await db.set(
        {
            'light':lightStatus
        });
    console.log("Done");
}

module.exports = router;

