const fetch = require('node-fetch');
const { toJson } = require('unsplash-js');
const Unsplash = require('unsplash-js').default;

global.fetch = fetch;

exports.searchPhoto = async (phrase, page, perPage, filters) => {
  const unsplash = new Unsplash({
    accessKey: process.env.ACCESS_KEY,
  });
  let result = await unsplash.search.photos(phrase, page, perPage, filters);
  result = await toJson(result);
  return result;
};
