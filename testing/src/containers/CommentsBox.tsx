import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentsActions } from '../actions/commentsAction';
import { withRouter, RouteComponentProps } from 'react-router';
import { StoreState } from '../store';

interface CommentsBoxProps extends React.HtmlHTMLAttributes<{}>, RouteComponentProps<{}> {}

const CommentsBox: React.FC<CommentsBoxProps> = (props: CommentsBoxProps) => {
  const [comment, setComment] = React.useState('');
  const dispatch = useDispatch();

  const authState = useSelector((storeState: StoreState) => storeState.authState);

  React.useEffect(() => {
    if (!authState.isLoggedIn) {
      props.history.push('/');
    }
  }, [authState.isLoggedIn, props.history]);

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
