import request from 'superagent-bluebird-promise';

export const requestApi = {
  get: url => request.get(`http://localhost:3030/${url}/`),
  post: url => request.post(`http://localhost:3030/${url}/`),
};
