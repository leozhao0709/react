import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import App from '../App';
import moxios from 'moxios';

let wrapped: ReactWrapper;

beforeEach(() => {
  wrapped = mount(<App />);
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched Comment #1' }, { name: 'Fetched Comment #2' }]
  });
});

afterEach(() => {
  wrapped.unmount();
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  wrapped.find('.fetchBtn').simulate('click');
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
  });
});
