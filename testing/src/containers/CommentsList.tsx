import * as React from 'react';

interface CommentsListProps extends React.HtmlHTMLAttributes<{}> {}

const CommentsList: React.FC<CommentsListProps> = (props: CommentsListProps) => {
  return <React.Fragment>Comments List</React.Fragment>;
};

CommentsList.defaultProps = {};

export default CommentsList;
