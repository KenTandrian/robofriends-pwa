import React, { Component } from 'react';

import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundry from '../ErrorBoundry';
import Header from '../Header';

import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }

  render() {
    const { robots, onSearchChange, isPending } = this.props;
    const filteredRobots = this.filterRobots();

    return (
      <div className='tc'>
        <Header/>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
