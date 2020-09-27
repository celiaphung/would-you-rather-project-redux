import React from 'react';
import './App.css';
import Nav from './Nav';
import Question from './Question';
import QuestionResult from './QuestionResult';

class App extends React.Component {
  render() {
    return (
      <div className='container' >
        <Nav />
        <Question />
        <QuestionResult />
      </div>
    );
  }
}

export default App;
