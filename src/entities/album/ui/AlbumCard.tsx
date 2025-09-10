import { useCallback, type FC } from "react";
import type { Album } from "../../post/model/types";
import styles from "./AlbumCard.module.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../shared/lib/theme/useTheme";
import { Button } from "../../../shared/ui/Button/Button";

type AlbumCardProps = {
  album: Album;
};

export const AlbumCard: FC<AlbumCardProps> = ({ album }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleOpenAlbum = useCallback(() => {
    navigate(`/albums/${album.id}/photos`);
  }, [album.id, navigate]);

  return (
    <div className={`${styles.albumCard} ${styles[theme]}`}>
      <h2 className={styles.albumCardTitle}>Album: "{album.title}"</h2>
      <Button onClick={handleOpenAlbum} className={styles.albumCardOpenButton}>
        Open Album
      </Button>
    </div>
  );
};
