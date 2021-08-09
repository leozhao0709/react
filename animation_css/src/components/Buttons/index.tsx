import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import Button from './Button';
import RotateEffect from './Effect/RotateEffect.module.scss';
import SwipeEffect from './Effect/SwipeEffect.module.scss';
import HoveEffect from './Effect/HoveEffect.module.scss';
import StrechEffect from './Effect/StrechEffect.module.scss';
import GlowingEffect from './Effect/GlowingEffect.module.scss';
import TextScaleEffect from './Effect/TextScaleEffect.module.scss';
import CircleSwapEffect from './Effect/CircleSwapEffect.module.scss';
import BorderGrowEffect from './Effect/BorderGrowEffect.module.scss';

interface ButtonsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ButtonsContainer: React.FC<ButtonsContainerProps> = (
  props: ButtonsContainerProps
) => {
  const { className, ...restProps } = props;

  return (
    <div
      {...restProps}
      className={classnames(
        'buttonsContainer',
        styles.buttonsContainer,
        className
      )}
    >
      <Button text="RotateEffect" className={RotateEffect.Effect} />
      <Button text="SwipeEffect" className={SwipeEffect.Effect} />
      <Button text="HoveEffect" className={HoveEffect.Effect} />
      <Button text="StrechEffect" className={StrechEffect.Effect} />
      <Button text="GlowingEffect" className={GlowingEffect.Effect} />
      <Button text="TextScaleEffect" className={TextScaleEffect.Effect} />
      <Button text="CircleSwapEffect" className={CircleSwapEffect.Effect} />
      <Button text="BorderGrowEffect" className={BorderGrowEffect.Effect} />
    </div>
  );
};

ButtonsContainer.defaultProps = {};

export default ButtonsContainer;
