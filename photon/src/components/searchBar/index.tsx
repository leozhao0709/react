import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { className, ...restProps } = props;

  return (
    <div {...restProps} className={classnames(className, styles.SearchBar)}>
      <input type="text" className={styles.textField} />
      <button className={styles.btn}>Search</button>
    </div>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
