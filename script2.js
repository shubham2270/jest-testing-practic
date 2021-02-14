const fetch = require("node-fetch");

const api = "https://swapi.py4e.com/api/people/";

const getPeoplePromise = (fetch) => {
  return fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return {
        count: data.count,
        retults: data.retults,
      };
    });
};

// console.log(getPeople(fetch));

const getPeople = async (fetch) => {
  const getRequest = await fetch(api);
  const data = await getRequest.json();
  const { count, results } = data;
  return {
    count,
    results,
  };
};

console.log(getPeople(fetch));

module.exports = {
  getPeople,
  getPeoplePromise,
};
