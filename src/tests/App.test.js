import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: /Home/i });
  const aboutLink = screen.getByRole('link', { name: /About/i });
  const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(favoriteLink).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial', () => {
  const { history } = renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', { name: /Home/i });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

test('Teste se a aplicação é redirecionada para a página de About', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: /About/i });
  expect(aboutLink).toBeInTheDocument();
  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

test('Teste se a aplicação é redirecionada para a página de Pokemons Favoritados', () => {
  const { history } = renderWithRouter(<App />);

  const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(favoriteLink).toBeInTheDocument();
  userEvent.click(favoriteLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

test('Teste se a aplicação é redirecionada para a página Not Found', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/xablau');

  const notFoundTitle = screen.getByRole('heading',
    { name: /Page requested not found/i, level: 2 });
  expect(notFoundTitle).toBeInTheDocument();
});
