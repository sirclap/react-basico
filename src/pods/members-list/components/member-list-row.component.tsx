import React from "react";
import { MemberVm } from "../member-list.vm";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";

interface Props {
  member: MemberVm;
  onEdit: (id: string) => void;
}

export const MemberListRow: React.FC<Props> = (props) => {
  const { member, onEdit } = props;

  const handleOnEdit = (login: string) => {
    onEdit(login);
  };

  return (
    <TableRow>
      <TableCell>
        <Avatar alt={member.login} src={member.avatar_url} />
      </TableCell>
      <TableCell>
        <Link href="#" onClick={() => handleOnEdit(member.login)}>
          {member.login}
        </Link>
      </TableCell>
      <TableCell>{member.id}</TableCell>
    </TableRow>
  );
};
