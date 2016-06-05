import AppStore from '../stores/app';
import PostsStore from '../stores/posts';

/**
  Inject Inital State into Stores
 */
export default (state) => ({
  app: new AppStore(state.app),
  posts: new PostsStore(state.posts),
});
