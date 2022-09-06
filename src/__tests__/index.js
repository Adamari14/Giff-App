import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('home work as expecte', () => {
  const {container} = render(<App />)
  const gifLink = container.querySelector('.Gif-link')
  expect(gifLink).toBeVisible()
});
