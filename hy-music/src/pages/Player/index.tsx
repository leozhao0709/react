import React from 'react';
import classnames from 'classnames';

interface PlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Player: React.FC<PlayerProps> = (props: PlayerProps) => {
  const { className, ...restProps } = props;

  return (
    <div {...restProps} className={classnames(className)}>
      Player Page
    </div>
  );
};

Player.defaultProps = {};

export default Player;
