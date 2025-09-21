import type { FC } from "react";
import type { Photo } from "../model/types";
import styles from "./PhotoCard.module.css";

type PhotoCardProps = {
  photo: Photo;
};

export const PhotoCard: FC<PhotoCardProps> = (props) => {
  const { photo } = props;

  return (
    <div className={styles.photoCard}>
      <img src={photo.url} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
};
