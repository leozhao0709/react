import React from 'react';
import classnames from 'classnames';

interface DiscoverProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Discover: React.FC<DiscoverProps> = (props: DiscoverProps) => {
  const { className, ...restProps } = props;

  return (
    <div {...restProps} className={classnames(className)}>
      Discover Page
    </div>
  );
};

Discover.defaultProps = {};

export default Discover;
