// spotifyAuth.js
const axios = require("axios");
require("dotenv").config();

const getAccessToken = async () => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const authString = `${clientId}:${clientSecret}`;
    const base64AuthString = Buffer.from(authString).toString("base64");

    try {
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            null,
            {
                headers: {
                    Authorization: `Basic ${base64AuthString}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                params: {
                    grant_type: "client_credentials",
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
