import React from 'react';
import './App.css';
import Nav from './Nav';
import { connect } from 'react-redux'

import NewQuestion from './NewQuestion';
import { handleInitialData } from '../actions/shared';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    // TODO: Check if logged in or not
    return (
      <div className='container' >
        <Nav />
        <NewQuestion />
      </div>
    );
  }
}

//Dashboard component is only rendered once handleInitialData() is finished
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
