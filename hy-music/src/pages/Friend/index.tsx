import React from 'react';
import classnames from 'classnames';

interface FriendProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Friend: React.FC<FriendProps> = (props: FriendProps) => {
  const { className, ...restProps } = props;

  return (
    <div {...restProps} className={classnames(className)}>
      Friend Page
    </div>
  );
};

Friend.defaultProps = {};

export default Friend;
