import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import CommentsBox from 'containers/CommentsBox';
import { Provider } from 'react-redux';
import Store from '../store';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(
    <Provider store={Store}>
      <CommentsBox />
    </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should have a textarea and two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    wrapped.update();
  });

  it('has a textarea that user can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('should clear textarea after form submit', () => {
    wrapped.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
