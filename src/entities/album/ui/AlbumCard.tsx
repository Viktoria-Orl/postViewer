import { type FC, type MouseEventHandler } from "react";
import styles from "./AlbumCard.module.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";
import clsx from "clsx";
import type { Album } from "../model/types";

type AlbumCardProps = {
  album: Album;
};

export const AlbumCard: FC<AlbumCardProps> = (props) => {
  const { album } = props;
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleOpenAlbum: MouseEventHandler<HTMLButtonElement> = () => {
    navigate(`/albums/${album.id}/photos`);
  };

  return (
    <div className={clsx(styles.albumCard, styles[theme])}>
      <h2 className={styles.albumCardTitle}>Album: "{album.title}"</h2>
      <Button onClick={handleOpenAlbum} className={styles.albumCardOpenButton}>
        Open Album
      </Button>
    </div>
  );
};
