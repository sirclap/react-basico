import React from "react";
import { getMember } from "core/api/member";
import { MemberVm, createEmptyMember } from "./member.vm";
import { mapMemberFromApiToVm } from "./member.mapper";

export const useMember = (login: string) => {
  const [member, setMember] = React.useState<MemberVm>(createEmptyMember());

  const loadMember = async () => {
    const apiMember = await getMember(login);
    const viewModelMember = mapMemberFromApiToVm(apiMember);
    setMember(viewModelMember);
  };

  React.useEffect(() => {
    loadMember();
  }, []);

  return { member, setMember };
};
