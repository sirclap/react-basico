export interface Member {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

export interface Members extends Array<Member> {}
