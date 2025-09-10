import type { FC } from "react";
import { Outlet } from "react-router-dom";
import { UserTabs } from "../../widgets/UserTabs/UserTabs";
import styles from "./UserLayout.module.css";

export const UserLayout: FC = () => {
  return (
    <div>
      <UserTabs />
      <div className={styles.userContent}>
        <Outlet />
      </div>
    </div>
  );
};
