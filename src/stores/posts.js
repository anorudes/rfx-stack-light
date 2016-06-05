import { observable, action } from 'mobx';

export default class PostsStore {
  @observable test = 1;

  constructor(posts) {
    Object.assign(this, posts);
  }

  @action
  changeTest() {
    this.test = 2;
  }
}
