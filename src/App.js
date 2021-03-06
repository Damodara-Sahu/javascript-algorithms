import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SplitSidebarView from './components/SplitSidebarView';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function openTarget() {
  let hash = location.hash.substring(1);  // eslint-disable-line

  if (hash) {
    var detail = document.getElementById(hash);
  }

  if (detail && detail.tagName.toLowerCase() === 'details') {
    detail.open === true ?  detail.open = false : detail.open = true
  }
}

class App extends Component {
  state = {

  }

  componentDidMount() {
    window.addEventListener('hashchange', openTarget);
  }


  render() {
    return (
      <div className="App">
        <SplitSidebarView>
          <Sidebar className="sidebar" />
          <div className="rightPart">
              <header className="App-header">
                Computer Science Algorithms in JavaScript
              </header>
              <Main />
          </div>
        </SplitSidebarView>
      </div>
    );
  }
}

export default App;
