import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  photo: Pexels.Photo;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { className, photo, ...restProps } = props;

  return (
    <div {...restProps} className={classnames(className, styles.Card)}>
      <div className={styles.Header}>
        <p className={styles.Author}>{photo.photographer}</p>
        <a
          href={photo.src.original}
          className={styles.Download}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
      <div className={styles.ImageContainer}>
        <img src={photo.src.large} />
      </div>
    </div>
  );
};

Card.defaultProps = {};

export default Card;
