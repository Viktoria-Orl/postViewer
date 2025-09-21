import { useCallback, type FC } from "react";
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

  const handleOpenAlbum = useCallback(() => {
    navigate(`/albums/${album.id}/photos`);
  }, [album.id, navigate]);

  return (
    <div className={clsx(styles.albumCard, styles[theme])}>
      <h2 className={styles.albumCardTitle}>Album: "{album.title}"</h2>
      <Button onClick={handleOpenAlbum} className={styles.albumCardOpenButton}>
        Open Album
      </Button>
    </div>
  );
};
