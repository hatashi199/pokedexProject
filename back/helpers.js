const axios = require("axios");

const getAxios = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

module.exports = { getAxios };
