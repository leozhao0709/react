import React from 'react';
import './App.css';
import CommentsBox from 'containers/CommentsBox';
import CommentsList from 'containers/CommentsList';

const App: React.FC = () => {
  return (
    <div className="App">
      <CommentsBox />
      <CommentsList />
    </div>
  );
};

export default App;
