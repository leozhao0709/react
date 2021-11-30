import React from 'react';
import classnames from 'classnames';
import Card, { CardProps } from './card';
import styles from './index.module.scss';

interface CardsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  photos: Pexels.Photo[];
}

const Cards: React.FC<CardsProps> = (props: CardsProps) => {
  const { className, photos, ...restProps } = props;

  return (
    <div {...restProps} className={classnames(className, styles.Cards)}>
      {photos.map((photo) => (
        <Card key={photo.id} id={photo.id} photo={photo} />
      ))}
    </div>
  );
};

Cards.defaultProps = {};

export default Cards;
