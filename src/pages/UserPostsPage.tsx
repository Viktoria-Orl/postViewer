import type { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "../widgets/UserTabs/UserTabs";

const UserPostsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <UserTabs />
      User Posts Page. User ID - {id}
    </div>
  );
};

export default UserPostsPage;
