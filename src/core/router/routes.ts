import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  login: string;
  membersList: string;
  membersDetail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  login: "/login",
  membersList: "/members/list",
  membersDetail: "/members/:login",
};

interface Routes extends Omit<SwitchRoutes, "membersDetail"> {
  membersDetail: (login: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  membersDetail: (login) => generatePath(switchRoutes.membersDetail, { login }),
};
