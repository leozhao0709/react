import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

interface ThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  caption: string;
  href?: string;
  as?: string;
}

const Thumbnail: React.FC<ThumbnailProps> = (props: ThumbnailProps) => {
  const { imageUrl, caption, href, as } = props;
  const imagePlaceHolder = 'http://placeimg.com/200/150/any';

  const renderContent = (
    <a className={styles.thumnail}>
      <img src={imageUrl || imagePlaceHolder} className={styles.image} />
      <h4 className={styles.caption}>{caption}</h4>
    </a>
  );

  return href ? (
    <Link href={href} as={as}>
      {renderContent}
    </Link>
  ) : (
    renderContent
  );
};

Thumbnail.defaultProps = {};

export default Thumbnail;
