import React from 'react';
import classnames from 'classnames';

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { className, ...restProps } = props;

  return (
    <div {...restProps} className={classnames(className)}>
      Footer
    </div>
  );
};

Footer.defaultProps = {};

export default Footer;
