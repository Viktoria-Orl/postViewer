import type { FC } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../shared/lib/theme/useTheme";
import styles from "./AlbumPhotosPage.module.css";
import clsx from "clsx";
import { useGetPhotosByAlbumIdQuery } from "../../entities/photo/api/photosApi";
import { skipToken } from "@reduxjs/toolkit/query";
import { ItemList } from "../../shared/ui/ItemList/ItemList";
import { PhotoCard } from "../../entities/photo/ui/PhotoCard";

export const AlbumPhotosPage: FC = () => {
  const { theme } = useTheme();
  const { albumId } = useParams<{ albumId: string }>();
  const albumIdNum = Number(albumId);
  const isInvalidId = isNaN(albumIdNum);

  const { data: photos = [], error } = useGetPhotosByAlbumIdQuery(
    isInvalidId ? skipToken : albumIdNum,
  );

  if (isInvalidId) return <div>Invalid album Id</div>;

  if (error) {
    console.error("Error loading photos:", error);
    return <div>Error loading photos for this album</div>;
  }

  if (photos.length === 0) {
    return <div>No photos found for this album.</div>;
  }

  return (
    <ItemList
      items={photos}
      renderItem={(photo) => <PhotoCard key={photo.id} photo={photo} />}
      className={clsx(styles.albumPhotos, styles[theme])}
    />
  );
};
