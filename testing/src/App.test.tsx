import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import CommentsBox from './containers/CommentsBox';
import CommentsList from './containers/CommentsList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should show comments box and comments List', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentsBox).length).toEqual(1);
  expect(wrapped.find(CommentsList).length).toEqual(1);
});
