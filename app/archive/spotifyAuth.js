// spotifyAuth.js
const axios = require("axios");
require("dotenv").config();

const getAccessToken = async () => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const authString = `${clientId}:${clientSecret}`;
    const base64AuthString = Buffer.from(authString).toString("base64");
    console.log(base64AuthString, "base64");
    console.log(authString, "authString");
    console.log(clientId, "id");
    console.log(clientSecret, "secret");
    try {
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            `grant_type=client_credentials`,
            {
                headers: {
                    Authorization: `Basic ${base64AuthString}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        return response.data.access_token;
    } catch (error) {
        console.error(
            "Error getting access token:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

module.exports = getAccessToken;
