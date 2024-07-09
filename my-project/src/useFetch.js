import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  // setting initial state and method to update state
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // const url = 'https://restcountries.eu/rest/v2/all'
    // const url = 'https://jsonplaceholder.typicode.com/todos/1';
    // const url = 'https://fakestoreapi.com/products';

    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
};

export default useFetch;
