// spotify.js

const axios = require("axios");
const parseString = require("xml2js").parseString;

async function getLatestEpisodes(rssFeedUrl) {
    try {
        const response = await axios.get(rssFeedUrl);
        const xmlData = response.data;

        return new Promise((resolve, reject) => {
            parseString(xmlData, (err, result) => {
                if (err) {
                    console.error("Error parsing XML:", err);
                    reject(err);
                }

                const items = result.rss.channel[0].item;
                let latestEpisodes = [];

                console.log("Latest Episodes:");
                for (let i = 0; i < 5; i++) {
                    latestEpisodes.push(items[i]);
                }

                resolve(items);
            });
        });
    } catch (error) {
        console.error("Error fetching or parsing RSS feed:", error.message);
        throw error;
    }
}

module.exports = { getLatestEpisodes };
