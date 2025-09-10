import type { FC } from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "../widgets/UserTabs/UserTabs";

const UserTodosPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <UserTabs />
      User Todos Page. User ID - {id}
    </div>
  );
};

export default UserTodosPage;
