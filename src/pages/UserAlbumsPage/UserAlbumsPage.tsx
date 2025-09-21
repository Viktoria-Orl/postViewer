import type { FC } from "react";
import { useParams } from "react-router-dom";
import { AlbumCard } from "../../entities/album/ui/AlbumCard";
import { useGetAlbumsByUserIdQuery } from "../../entities/album/api/albumsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import styles from "./UserAlbumsPage.module.css";
import { ItemList } from "../../shared/ui/ItemList/ItemList";

export const UserAlbumsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const isInvalidId = isNaN(userId);

  const {
    data: userAlbums = [],
    error,
    isLoading,
  } = useGetAlbumsByUserIdQuery(isInvalidId ? skipToken : userId);

  if (isInvalidId) return <div>Invalid user ID</div>;

  if (error) {
    console.error("Error loading albums for user:", error);
    return <div>Error loading albums for user</div>;
  }

  if (!isLoading && userAlbums.length === 0) {
    return <div>No albums found for this user</div>;
  }

  return (
    <ItemList
      items={userAlbums}
      renderItem={(album) => <AlbumCard key={album.id} album={album} />}
      className={styles.userAlbums}
    />
  );
};
