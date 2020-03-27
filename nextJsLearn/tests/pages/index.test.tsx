import React from 'react';
import Home from '../../src/pages';
import { render } from '@testing-library/react';

describe('HomePage', () => {
  const getComponent = () => render(<Home shows={[{ id: 1, show: { name: 'show' } }]} />);

  it('should render Home Page', () => {
    const { container } = getComponent();
    expect(container).not.toBeNull();
  });
});
