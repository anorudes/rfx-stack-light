import React, { Component } from 'react';
import { connect } from '../../state/context';

// global styles
import '../../styles/app.css';

// component styles
import styles from './styles.css';

@connect
export default class App extends Component {
  render() {
    const { posts } = this.context.store;

    return (
      <div>
        test = { posts.test }
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
