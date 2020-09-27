import React from "react";
import { useHistory } from "react-router-dom";
import { useMemberList } from "./member-list.hook";
import { MemberListComponent } from "./member-list.component";
import { Memberfilter } from "./components";
import { routes } from "core/router";
import { useStorageState } from "react-storage-hooks";
import { EmptyList } from "common/empty-list/empty-list.component";

export const MemberListContainer: React.FC = () => {
  const { memberList, loadMemberList } = useMemberList();
  const [filter, setFilter] = useStorageState(
    localStorage,
    "member-list-filter",
    "lemoncode"
  );
  const history = useHistory();

  React.useEffect(() => {
    loadMemberList(filter);
  }, [filter]);

  const handleOnFilter = (value: string) => {
    setFilter(value);
  };

  const handleOnEdit = (login: string) => {
    history.push(routes.membersDetail(login));
  };

  return (
    <>
      <section>
        <Memberfilter
          onFilter={handleOnFilter}
          defaultFilter={filter}
        ></Memberfilter>
      </section>
      <section>
        {memberList.length > 0 ? (
          <MemberListComponent memberList={memberList} onEdit={handleOnEdit} />
        ) : (
          <EmptyList itemName="members" />
        )}
      </section>
    </>
  );
};
