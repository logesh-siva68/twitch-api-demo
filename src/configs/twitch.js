const dot = require('dotenv').config()
module.exports = {
    clientId : process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    urls:{
        helixBase : "https://api.twitch.tv/helix/",
        token: "https://id.twitch.tv/oauth2/token"
    }
}