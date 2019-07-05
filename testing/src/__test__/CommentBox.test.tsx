import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import CommentsBox from 'containers/CommentsBox';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(<CommentsBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('should have a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a textarea that user can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('should clear textarea after form submit', () => {
  wrapped.find('textarea').simulate('change', {
    currentTarget: { value: 'new comment' }
  });
  wrapped.update();
  wrapped.find('form').simulate('submit');
  wrapped.update();
  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
