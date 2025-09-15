import type { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";
import type { User } from "../../shared/model/types";
import { mockUsers } from "../../shared/mocks/users";

export const UserTabs: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const user: User | undefined = mockUsers.find(
    (user) => user.id === Number(id),
  );

  if (!user) return <div>User witn id {id} not found</div>;

  return (
    <nav className={`${styles.userNavMenu} ${styles[theme]}`}>
      <div className={styles.userName}>👤 {user.name}</div>
      <div className={styles.userTabs}>
        <NavLink
          to={`/users/${id}/posts`}
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.activeTab : ""}`
          }
        >
          Posts
        </NavLink>

        <NavLink
          to={`/users/${id}/albums`}
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.activeTab : ""}`
          }
        >
          Albums
        </NavLink>

        <NavLink
          to={`/users/${id}/todos`}
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.activeTab : ""}`
          }
        >
          Todos
        </NavLink>
      </div>
    </nav>
  );
};
