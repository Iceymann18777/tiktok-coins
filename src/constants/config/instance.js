const { default: axios } = require('axios');
const { baseApi } = require('./domains');

export const onlineUsers = axios.create({
  baseURL: `${baseApi}/users`,
});
