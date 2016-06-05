import { observable, action } from 'mobx';

export default class PostsStore {
  @observable test = 1;

  @action
  changeTest() {
    this.test = 2;
  }
}
