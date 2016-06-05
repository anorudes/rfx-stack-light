import React, { Component } from 'react';
import { connect } from '../../state/context';

// global styles
import '../../styles/app.css';

// component styles
import styles from './styles.css';

@connect
export default class App extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object,
    params: React.PropTypes.object,
    routeParams: React.PropTypes.object,
    route: React.PropTypes.object,
    routes: React.PropTypes.array,
  };

  handleAppNavRequestChange = (open) => {
    this.context.store.ui.toggleAppNav(open);
  };

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
