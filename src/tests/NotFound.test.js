import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

test('Teste se a página contém o heading h2 Page requested not found 😭', () => {
  renderWithRouter(<NotFound />);

  const notFoundTitle = screen
    .getByRole('heading',
      { name: /Page requested not found/i, level: 2 });
  expect(notFoundTitle).toBeInTheDocument();
});

test('Teste se a página mostra a imagem', () => {
  renderWithRouter(<NotFound />);

  const notFoundImg = screen.getAllByRole('img');
  const imgLink = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  expect(notFoundImg[1]).toHaveAttribute('src', imgLink);
});
