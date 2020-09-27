import React from "react";
import * as classes from "./app.layout.styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            React Básico
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{children}</main>
    </div>
  );
};
