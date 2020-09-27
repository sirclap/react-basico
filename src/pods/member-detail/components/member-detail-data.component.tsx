import React from "react";
import ListItem from "@material-ui/core/ListItem";
import * as classes from "./member-detail-data.styles";

interface Props {
  label: string;
  value: string;
}

export const MemberDetailData: React.FC<Props> = (props) => {
  const { label, value } = props;

  return (
    <>
      <ListItem className={classes.root}>
        <label>{label}:</label>
        {value}
      </ListItem>
    </>
  );
};
