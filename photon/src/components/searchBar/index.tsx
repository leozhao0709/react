import React, { useRef } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  onSearch: (text) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const { className, onSearch, ...restProps } = props;
  const textFieldRef = useRef<null | HTMLInputElement>(null);

  return (
    <div {...restProps} className={classnames(className, styles.SearchBar)}>
      <input ref={textFieldRef} type="text" className={styles.textField} />
      <button
        className={styles.btn}
        onClick={() => onSearch(textFieldRef.current?.value)}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.defaultProps = {};

export default SearchBar;
