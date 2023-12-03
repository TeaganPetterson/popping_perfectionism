const axios = require("axios");
const { isUtf8 } = require("buffer");
const { get } = require("https");
const parseString = require("xml2js").parseString;

async function getLatestEpisodes(rssFeedUrl) {
    try {
        const response = await axios.get(rssFeedUrl);
        const xmlData = response.data;

        parseString(xmlData, (err, result) => {
            if (err) {
                console.error("Error parsing XML:", err);
                return;
            }

            // Assuming a standard RSS feed structure
            const items = result.rss.channel[0].item;

            let latestEpisodes = [];

            console.log("Latest Episodes:");
            for (let i = 0; i < 5; i++) {
                console.log(typeof items[i].title, typeof items[i].description);
                latestEpisodes.push(items[i]);
            }

            return latestEpisodes;
        });
    } catch (error) {
        console.error("Error fetching or parsing RSS feed:", error.message);
    }
}

// Example usage with the provided Anchor RSS feed URL
const anchorRSSFeedUrl = "https://anchor.fm/s/40734de0/podcast/rss";
getLatestEpisodes(anchorRSSFeedUrl);
