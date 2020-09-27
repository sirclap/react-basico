import React from "react";
import { MemberListContainer } from "pods/members-list";
import { AppLayout } from "layouts";

export const MembersList: React.FC = () => {
  return (
    <AppLayout>
      <MemberListContainer />
    </AppLayout>
  );
};
