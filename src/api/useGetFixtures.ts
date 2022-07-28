/*
import React, { useState, useEffect } from 'react';
import axios from "axios";

 export const useGetFixtures = () => {
  const [data, setData] = useState()

  const options = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
    params: { next: "20" },
    headers: {
      "X-RapidAPI-Key": "cfb46f14e4mshc29e8bb6b4d31c3p18e819jsne9c885907854",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };
  
    axios
      .request(options)
      .then(function (response) {
   setData(response.data.response)
      })
      .catch(function (error) {
        return error;
      });

return data

};

*/


