import React from "react";
import { MemberVm } from "./member.vm";
import { useHistory } from "react-router-dom";
import { routes } from "core/router";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { MemberDetailData } from "./components";

interface Props {
  member: MemberVm;
}

export const MemberDetailComponent: React.FC<Props> = ({ member }) => {
  const history = useHistory();

  const backToList = () => {
    history.push(routes.membersList);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe">U</Avatar>}
        title={member.company}
        subheader={member.name}
      />
      <CardContent>
        {member.id ? (
          <List component="nav" aria-label="mailbox folders">
            <MemberDetailData label="ID" value={member.id}></MemberDetailData>
            <Divider />
            <MemberDetailData
              label="Login"
              value={member.login}
            ></MemberDetailData>
            <Divider />
            <MemberDetailData
              label="Name"
              value={member.name}
            ></MemberDetailData>
            <Divider />
            <MemberDetailData
              label="Company"
              value={member.company}
            ></MemberDetailData>
            <Divider />
            <MemberDetailData label="Bio" value={member.bio}></MemberDetailData>
            <Divider />
          </List>
        ) : (
          <span>Member not found</span>
        )}
      </CardContent>
      <CardActions>
        <Button type="submit" size="small" color="primary" onClick={backToList}>
          Back to list page
        </Button>
      </CardActions>
    </Card>
  );
};
