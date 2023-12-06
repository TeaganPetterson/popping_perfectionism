// spotify.js

const axios = require("axios");
const { Euphoria_Script } = require("next/font/google");
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

                for (let i = 0; i < items.length; i++) {
                    let wholeTitle = items[i].title[0];
                    let seasonNumber = wholeTitle.slice(
                        0,
                        wholeTitle.indexOf(":")
                    );
                    if (!parseInt(seasonNumber)) {
                        seasonNumber = 0;
                    }
                    let episodeNumber = wholeTitle.slice(
                        wholeTitle.indexOf(":") + 1,
                        wholeTitle.indexOf(" ")
                    );
                    if (!parseInt(episodeNumber)) {
                        episodeNumber = 0;
                    }
                    let seasonName;
                    if (wholeTitle.indexOf(": ") > 0) {
                        seasonName = wholeTitle.slice(
                            wholeTitle.indexOf(" ") + 1,
                            wholeTitle.indexOf(": ")
                        );
                    }
                    let titleName;
                    if (wholeTitle.indexOf(": ") > 0) {
                        titleName = wholeTitle.slice(
                            wholeTitle.indexOf(": ") + 2
                        );
                    } else {
                        titleName = wholeTitle.slice(
                            wholeTitle.indexOf("- ") + 2
                        );
                    }
                    items[i].title[1] = seasonNumber;
                    items[i].title[2] = episodeNumber;
                    items[i].title[3] = seasonName;
                    items[i].title[4] = titleName;
                    console.log(items[i].title[3]);
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
