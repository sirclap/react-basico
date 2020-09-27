import React from "react";
import { getMemberList } from "core/api/member";
import { MemberVm } from "./member-list.vm";
import { mapMemberListFromApiToVm } from "./member-list.mapper";

export const useMemberList = () => {
  const [memberList, setMemberList] = React.useState<MemberVm[]>([]);

  const loadMemberList = async (filter) => {
    const apiMemberList = await getMemberList(filter);
    const viewModelMemberList = mapMemberListFromApiToVm(apiMemberList);
    setMemberList(viewModelMemberList);
  };

  return { memberList, loadMemberList };
};
