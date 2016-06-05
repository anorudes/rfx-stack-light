import React, { Component } from 'react';
import { connect } from '../../state/context';

// global styles
import '../../styles/app.css';

// component styles
import styles from './styles.css';

@connect
export default class App extends Component {
  static fetchData(store) {
    return store.posts.fetchPosts();
  }

  render() {
    const { posts } = this.context.store;

    return (
      {
        posts.items.toJS().map(post =>
          <span key={post.id}>
            {post.id})
          </span>
        )
      }
        test = { posts.test }
        <br />
        <button
          className={styles.button}
          onClick={() => posts.changeTest()}
        >
          change test
        </button>
      </div>
    );
  }
}
