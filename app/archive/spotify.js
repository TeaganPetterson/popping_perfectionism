// spotify.js
import axios from "axios";
import getAccessToken from "./spotifyAuth";

const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";

const getShowEpisodes = async (
    showId,
    market = "US",
    limit = 20,
    offset = 0
) => {
    const accessToken = await getAccessToken();

    const response = await axios.get(
        `${SPOTIFY_API_BASE_URL}/shows/${showId}/episodes`,
        {
            params: {
                market,
                limit,
                offset,
            },
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    return response.data;
};

export default getShowEpisodes;
