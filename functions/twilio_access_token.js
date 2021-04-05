const AccessToken = require('twilio').jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const path = require("path");
const jwt = require('jsonwebtoken')
require("dotenv").config(path.join(__dirname, "../.env"))



function generateAccessToken(identity, roomID) {
    console.log(identity, roomID)
    const token = new AccessToken(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_ACCOUNT_API_KEY, process.env.TWILIO_AUTH_API_SECRET)
    token.identity = identity;
    const videoGrant = new VideoGrant({
        room: roomID
    });
    token.addGrant(videoGrant);
    return token.toJwt();
}

module.exports = generateAccessToken
