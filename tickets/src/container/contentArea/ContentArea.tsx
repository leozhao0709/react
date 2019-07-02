import * as React from 'react';
import './ContentArea.scss';

interface ContentAreaProps extends React.HtmlHTMLAttributes<{}> {}

const ContentArea: React.FC<ContentAreaProps> = (props: ContentAreaProps) => {
  return <div className="ContentArea">Content Area</div>;
};

ContentArea.defaultProps = {};

export default ContentArea;
