import React from 'react';
import Thumbnail from '../thumbnail';
import styles from './index.module.scss';

interface CastsProps extends React.HTMLAttributes<HTMLDivElement> {
  casts: any;
}

const Casts: React.FC<CastsProps> = (props: CastsProps) => {
  const { casts } = props;
  const renderCasts = casts.map(castItem => (
    <li key={castItem.person.id}>
      <Thumbnail imageUrl={castItem.person.image && castItem.person.image.medium} caption={castItem.person.name} />
    </li>
  ));

  return (
    <div className={styles.casts}>
      <h3>Cast</h3>
      <ul className={styles.castList}>{renderCasts}</ul>
    </div>
  );
};

Casts.defaultProps = {};

export default Casts;
