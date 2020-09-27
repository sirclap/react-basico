import React from "react";
import Container from "@material-ui/core/Container";
import * as classes from "./centered.layout.styles";

export const CenteredLayout: React.FC = ({ children }) => {
  return <div className={classes.root}>{children}</div>;
};
