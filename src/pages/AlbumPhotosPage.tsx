import type { FC } from "react";
import { useParams } from "react-router-dom";

const AlbumPhotosPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  return <div>Album Photos Page: {id}</div>;
};

export default AlbumPhotosPage;
