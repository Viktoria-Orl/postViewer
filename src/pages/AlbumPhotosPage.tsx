import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../shared/lib/theme/useTheme";
import { mockPhotos } from "../shared/mocks/photos";
import styles from "./AlbumPhotosPage.module.css";
import clsx from "clsx";

export const AlbumPhotosPage: FC = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const { theme } = useTheme();

  const photos = mockPhotos.filter((photo) => photo.albumId === Number(albumId));

  if (photos.length === 0) {
    return <div>No photos found for this album.</div>;
  }

  return (
    <div className={clsx(styles.albumPhotos, styles[theme])}>
      {photos.map((photo) => (
        <div key={photo.id} className={styles.photoCard}>
          <img src={photo.url} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};
