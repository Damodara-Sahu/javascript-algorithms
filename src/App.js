import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SplitSidebarView from './components/SplitSidebarView';

import './App.css';

function openTarget() {
  let hash = location.hash.substring(1),  // eslint-disable-line
    details = document.getElementsByTagName('details');

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

  componentWillMount() {
    window.addEventListener('hashchange', openTarget);
  }


  render() {
    return (
      <div className="App">
      <div className="main">
        <SplitSidebarView>
          <Sidebar
            className="sidebar"
          />
          <div className="wrapper">
            <header className="App-header">
              Computer Science Algorithms by Javascript
            </header>
            <Main />
          </div>
        </SplitSidebarView>
        </div>
    </div>
    );
  }
}

export default App;
