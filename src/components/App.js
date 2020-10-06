import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoadingBar } from "react-redux-loading-bar";
import { connect } from "react-redux";
import React, { Fragment } from "react";

import { handleFetchData } from "../actions/shared";
import Home from "./Home";
import LogIn from "./LogIn";
import Nav from "./Nav";
import NewQuestion from "./NewQuestion";
import PrivateRoute from "./PrivateRoute";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";

class App extends React.Component {
  componentDidMount() {
      this.props.dispatch(handleFetchData());
  }

  render() {
    // TODO: Check if logged in or not
    return (
      <div className="container">
        <BrowserRouter>
          <Fragment>
            <div className="container">
              <Nav />
              <LoadingBar />
              <Switch>
                <Route path="/login" component={LogIn} />
                <PrivateRoute exact path="/">
                  <Home />
                </PrivateRoute>
                <PrivateRoute path="/add">
                  <NewQuestion />
                </PrivateRoute>
                <PrivateRoute path="/leaderboard">
                  <LeaderBoard />
                </PrivateRoute>
                <PrivateRoute path="/question/:id">
                  <QuestionPage />
                </PrivateRoute>
              </Switch>
               
            </div>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

//Dashboard component is only rendered once handleInitialData() is finished
function mapStateToProps({ authedUser }) {
  return {
    loading: !authedUser,
    loggedIn: authedUser,
  };
}

export default connect(mapStateToProps)(App);
