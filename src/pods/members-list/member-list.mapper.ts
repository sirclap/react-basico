import { Member } from "core/api/member";
import { MemberVm } from "./member-list.vm";

const mapMemberFromApiToVm = (member: Member): MemberVm => ({
  ...member,
});

export const mapMemberListFromApiToVm = (memberList: Member[]): MemberVm[] =>
  memberList.map((e) => mapMemberFromApiToVm(e));
