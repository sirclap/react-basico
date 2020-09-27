import * as apiModel from "core/api/member";
import * as viewModel from "./member.vm";

export const mapMemberFromApiToVm = (
  member: apiModel.Member
): viewModel.MemberVm => {
  return Boolean(member)
    ? {
        ...member,
      }
    : viewModel.createEmptyMember();
};
