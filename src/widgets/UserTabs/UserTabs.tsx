import type { FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./UserTabs.module.css";
import { useTheme } from "../../shared/lib/theme/useTheme";

export const UserTabs: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  
  return (
    <nav className={`${styles.userTabs} ${styles[theme]}`}>
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
    </nav>
  );
};
