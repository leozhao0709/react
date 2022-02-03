import React from 'react';
import classnames from 'classnames';

interface MineProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Mine: React.FC<MineProps> = (props: MineProps) => {
  const { className, ...restProps } = props;

  return (
    <div {...restProps} className={classnames(className)}>
      Mine Page
    </div>
  );
};

Mine.defaultProps = {};

export default Mine;
