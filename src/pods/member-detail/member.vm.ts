export interface MemberVm {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

export const createEmptyMember = (): MemberVm => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});
