import { Members, Member } from "./member.api.model";

export const getMember = async (login: string): Promise<Member> => {
  return fetch(`https://api.github.com/users/${login}`).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw response;
    }
  });
};

export const getMemberList = async (filter: string = ""): Promise<Members> => {
  return fetch(`https://api.github.com/orgs/${filter}/members`).then(
    (response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else if (response.status == 404) {
        return [];
      } else {
        throw response;
      }
    }
  );
};
