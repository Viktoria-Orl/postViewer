import type { FC } from "react";
import { useParams } from "react-router-dom";
import { mockAlbums } from "../../shared/mocks/albums";
import { AlbumCard } from "../../entities/album/ui/AlbumCard";

export const UserAlbumsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const userAlbums = mockAlbums.filter((album) => album.userId === userId);

  if (userAlbums.length === 0) {
    return <div>No albums found</div>;
  }

  return (
    <div>
      {userAlbums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
};
