const axios = require("axios");

const { twitch } = require("../configs");
const e = require("express");

let token = "";

const getToken = async () => {
  try {
    const data = await axios.post(twitch.urls.token, {
      client_id: twitch.clientId,
      client_secret: twitch.clientSecret,
      grant_type: "client_credentials",
    });
    console.log(data.data);
    token = data.data.access_token;
    console.log(token);
    return token;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUser = async (req, res, next) => {
  const url = `${twitch.urls.helixBase}users?login=${req.params.userName}`;
  try {
    const user = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + (await getToken()),
        "Client-Id": twitch.clientId,
      },
    });
    res.status(200).json(user.data);
  } catch (err) {
    res.status(500).json(err);
  }
};
const getChannelPoints = async (req, res, next) => {
  const url = `${twitch.urls.helixBase}channel_points/custom_rewards?broadcaster_id=${req.params.id}&only_manageable_rewards=true`;
  try {
    const points = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + (await getToken()),
        "Client-Id": twitch.clientId,
      },
    });
    console.log(points);
    res.status(200).json(points.data);
  } catch (err) {
    res.status(500).json(err.response.data);
  }
};

module.exports = { getUser, getChannelPoints };