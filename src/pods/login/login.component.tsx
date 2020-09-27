import React from "react";
import { Login } from "./login.vm";
import { createEmptyLogin } from "./login.vm";
import * as classes from "./login.component.styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CardActions } from "@material-ui/core";

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [login, setLogin] = React.useState<Login>(createEmptyLogin());

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(login);
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Card>
        <CardHeader title="Login" />
        <CardContent className={classes.root}>
          <TextField
            id="login-user"
            label="User"
            value={login.user}
            onChange={(e) => setLogin({ ...login, user: e.target.value })}
          />
          <TextField
            id="login-password"
            label="Password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </CardContent>
        <CardActions>
          <Button type="submit" size="small" color="primary">
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
