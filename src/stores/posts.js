import { observable, action } from 'mobx';
import { requestApi } from '../utils/request';

export default class PostsStore {
  @observable test = 1;
  @observable items = [];

  constructor(posts) {
    Object.assign(this, posts);
  }

  @action
  fetchPosts() {
    requestApi
      .get('api/posts')
      .promise()
      .then(res => { this.items = res.body.posts; });
  }

  @action
  changeTest() {
    this.test = 2;
  }
}
