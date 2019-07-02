import * as React from 'react';

interface StreamListProps extends React.HtmlHTMLAttributes<{}> {}

const StreamList: React.FC<StreamListProps> = (props: StreamListProps) => {
  return <div {...props}>StreamList</div>;
};

StreamList.defaultProps = {};

export default StreamList;
