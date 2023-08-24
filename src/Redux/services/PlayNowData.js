import React, { useEffect, useState } from "react";
import useTopCharts from "./dataset";

function usePlayNow() {
  const { dataMusic: data, isFetching, error } = useTopCharts();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5905beffebmsh939a54e6aaaa26bp1caf11jsnf6b174336718",
      "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
    },
  };

  const [dataMusic, setDataMusic] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const array = [];
      if (Object.keys(data).length > 0) {
        for (const song of data?.slice(0, 10)) {
          const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${
            song?.audio?.split("=")[1]
          }`;

          try {
            const response = await fetch(url, options);
            const result = await response.json();

            const modifiedData = {
              ...song,
              audio: result?.link,
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

  if (
    isFetching ||
    Object.keys(data).length === 0 ||
    Object.keys(dataMusic).length === 0
  ) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return {
    dataMusic,
    isFetching,
    error,
  };
}

export default usePlayNow;
