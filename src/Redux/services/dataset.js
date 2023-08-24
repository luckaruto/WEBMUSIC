import React, { useEffect, useState } from "react";
import { useGetTopChartsQuery } from "./spotify";

function useTopCharts() {
  const { data, error, isFetching } = useGetTopChartsQuery();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5905beffebmsh939a54e6aaaa26bp1caf11jsnf6b174336718",
      "X-RapidAPI-Host": "spotify-downloader-api.p.rapidapi.com",
    },
  };

  function convertToTrackURL(trackURI) {
    const parts = trackURI.split(":");
    const trackID = parts[2];
    const trackURL = `https://open.spotify.com/track/${trackID}`;
    return trackURL;
  }

  const [dataMusic, setDataMusic] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const array = [];
      if (data) {
        for (const song of data.slice(0, 10)) {
          const url = `https://spotify-downloader-api.p.rapidapi.com/Home/GetSpotifyUserInfo?Tracklink=${encodeURIComponent(
            convertToTrackURL(song.trackMetadata?.trackUri)
          )}`;
          try {
            const response = await fetch(url, options);
            const result = await response.json();

            const modifiedData = {
              ...song,
              audio: result?.YoutubeUrl,
            };
            array.push(modifiedData);
          } catch (error) {
            console.error(error);
          }
        }
        setDataMusic(array);
      }
    }

    fetchData();
  }, [data]);

  return {
    dataMusic,
    isFetching,
    error,
  };
}

export default useTopCharts;
