import React from "react";
import * as classes from "./member-filter.component.styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

interface Props {
  defaultFilter: string;
  onFilter: (filter: string) => void;
}

export const Memberfilter: React.FC<Props> = React.memo(
  ({ defaultFilter, onFilter }) => {
    const [filter, setFilter] = React.useState<string>(defaultFilter);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onFilter(filter);
    };

    return (
      <Paper elevation={3} className={classes.root}>
        <form onSubmit={(e) => submitForm(e)}>
          <TextField
            id="login-user"
            label=""
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <IconButton aria-label="search" type="submit">
            <SearchIcon />
          </IconButton>
        </form>
      </Paper>
    );
  }
);
