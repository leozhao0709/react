import * as React from 'react';
import { useDispatch } from 'react-redux';
import { CommentsActions } from '../actions/commentsAction';
import { withRouter, RouteComponentProps } from 'react-router';
import { useAuth } from '../hooks/useAuth';

interface CommentsBoxProps extends React.HtmlHTMLAttributes<{}>, RouteComponentProps<{}> {}

const CommentsBox: React.FC<CommentsBoxProps> = (props: CommentsBoxProps) => {
  const [comment, setComment] = React.useState('');
  const dispatch = useDispatch();

  useAuth(props);

  const handleCommentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComment('');
    dispatch(CommentsActions.saveComments(comment));
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h4>Add a Comment</h4>
      <textarea name="textarea" onChange={e => handleCommentOnChange(e)} value={comment} />
      <div>
        <button>Submit Comment</button>
        <button
          type="button"
          className="fetchBtn"
          onClick={() => {
            dispatch(CommentsActions.fetchComments());
          }}
        >
          Fetch Comments
        </button>
      </div>
    </form>
  );
};

CommentsBox.defaultProps = {};

export default withRouter(CommentsBox);
