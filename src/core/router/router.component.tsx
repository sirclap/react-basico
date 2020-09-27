import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { LoginScene, MembersList, MembersDetail } from "scenes";

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginScene}
        />
        <Route
          exact={true}
          path={switchRoutes.membersList}
          component={MembersList}
        />
        <Route
          exact={true}
          path={switchRoutes.membersDetail}
          component={MembersDetail}
        />
      </Switch>
    </Router>
  );
};
