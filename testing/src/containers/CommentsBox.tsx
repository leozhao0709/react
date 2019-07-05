import * as React from 'react';

interface CommentsBoxProps extends React.HtmlHTMLAttributes<{}> {}

const CommentsBox: React.FC<CommentsBoxProps> = (props: CommentsBoxProps) => {
  const [comment, setComment] = React.useState('');

  const handleCommentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComment('');
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h4>Add a Comment</h4>
      <textarea name="textarea" onChange={e => handleCommentOnChange(e)} value={comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

CommentsBox.defaultProps = {};

export default CommentsBox;
