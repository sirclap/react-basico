import React from "react";
import { LoginComponent } from "./login.component";
import { Login } from "./login.vm";
import { isValidLogin } from "core/api/login";
import { useHistory } from "react-router-dom";
import { routes } from "core/router";

export const LoginContainer: React.FC = () => {
  const history = useHistory();

  const loginSuccess = (isValid) => {
    if (isValid) {
      history.push(routes.membersList);
    } else {
      alert("Invalid login");
    }
  };

  const handleLogin = (login: Login) => {
    isValidLogin(login.user, login.password).then(loginSuccess);
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
    </>
  );
};
