import React from "react";
import { MemberDetailContainer } from "pods/member-detail";
import { AppLayout } from "layouts";

export const MembersDetail: React.FC = () => {
  return (
    <AppLayout>
      <MemberDetailContainer />
    </AppLayout>
  );
};
