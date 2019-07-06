import * as React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../store/index';

interface CommentsListProps extends React.HtmlHTMLAttributes<{}> {}

const CommentsList: React.FC<CommentsListProps> = (props: CommentsListProps) => {
  const comments = useSelector((storeState: StoreState) => storeState.commentsState).comments;

  return (
    <React.Fragment>
      <h4>Comments List</h4>
      <ol>
        {comments.map((comment, i) => (
          <li key={`comment ${i}`}>{comment}</li>
        ))}
      </ol>
    </React.Fragment>
  );
};

CommentsList.defaultProps = {};

export default CommentsList;
