import { useStrict } from 'mobx';

import AppStore from '../stores/app';
import PostsStore from '../stores/posts';

/**
  Enables / disables strict mode globally.
  In strict mode, it is not allowed to
  change any state outside of an action
 */
useStrict(true);

/**
  Inject Inital State into Stores
 */
export default (state) => ({
  app: new AppStore(state.app),
  posts: new PostsStore(state.posts),
});
