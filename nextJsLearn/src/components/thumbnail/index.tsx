import React from 'react';
import { NextPage } from 'next';
import styles from './index.module.scss';

interface ThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  caption: string;
}

const Thumbnail: NextPage<ThumbnailProps> = (props: ThumbnailProps) => {
  const { imageUrl, caption } = props;

  return (
    <div className={styles.thumnail}>
      <img src={imageUrl} className={styles.image} />
      <h4 className={styles.caption}>{caption}</h4>
    </div>
  );
};

Thumbnail.defaultProps = {};

export default Thumbnail;
