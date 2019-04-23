const path = require('path');
var twilio = require('twilio');
var shell = require('shelljs');
const Max = require('max-api');
var fs = require('fs');

const accountSid = ANSAPHONE_TWILIO_AUTH;
const authToken = ANSAPHONE_TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

Max.post(`Loaded the ${path.basename(__filename)} script`);

Max.addHandler("start", (msg) => {
    Max.outlet(msg);
    client.recordings.each(recordings => receiveREC(recordings.sid, recordings.dateCreated));
});

function receiveREC(sid, dateCreated) {
    var newWAV = "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Recordings/" + sid + ".wav";
    var ripHaze = '/usr/local/bin/ffmpeg -i ' + newWAV + ' ' + sid + '.wav';
    console.log(ripHaze);
    if (shell.exec(ripHaze).code !== 0) {
        shell.echo('failed');
        shell.exit(1);
        if (Max) Max.outlet("ready");
    }
}