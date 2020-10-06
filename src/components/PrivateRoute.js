import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

// Concept adapted from https://reactrouter.com/web/example/auth-workflow
class PrivateRoute extends React.Component {
  render() {
    const { children, loggedIn, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={({ location, ...nestedProps }) =>
          loggedIn ? (
            React.cloneElement(children, { location, ...nestedProps })
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
}

function mapStateToProps({ authedUser }) {
  const { id } = authedUser || {};
  return {
    loggedIn: !!id,
  };
}

export default connect(mapStateToProps)(withRouter(PrivateRoute));
