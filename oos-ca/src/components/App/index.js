import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import CrewContainer from '../CrewContainer';
import Filters from '../Filters';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" data-cy="app_logo" alt="logo" />
          <h1 className="App-title" data-cy="app_title">OpenOceanStudio: Crew Applications</h1>
        </header>
        <Filters />
        <div className="App-container">
          <div className="App-column" data-cy="applied">
            <CrewContainer name="Applied" hiringStage="applied" />
          </div>
          <div className="App-column" data-cy="interviewing">
            <CrewContainer name="Interviewing" hiringStage="interviewing" />
          </div>
          <div className="App-column" data-cy="hired">
            <CrewContainer name="Hired" hiringStage="hired" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
