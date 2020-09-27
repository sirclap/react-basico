import React from "react";
import { useParams } from "react-router-dom";
import { MemberDetailComponent } from "./member-detail.component";
import { useMember } from "./member.hook";

export const MemberDetailContainer: React.FC = () => {
  const { login } = useParams();
  const { member } = useMember(login);

  return (
    <>
      <MemberDetailComponent member={member} />
    </>
  );
};
