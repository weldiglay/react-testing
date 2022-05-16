import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se é renderizado um card com as infos de determinado pokémon', () => {
  renderWithRouter(<App />);

  const pokemonName = screen.getByText('Pikachu');
  expect(pokemonName).toBeDefined();

  const pokemonType = screen.getAllByText('Electric');
  expect(pokemonType[1]).toBeDefined();

  const pokemonWeight = screen.getByText(/Average weight: 6.0 kg/i);
  expect(pokemonWeight).toBeDefined();

  const pokemonImg = screen.getByRole('img');
  const imgLink = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
  expect(pokemonImg).toBeDefined();
  expect(pokemonImg).toHaveAttribute('src', imgLink);
  expect(pokemonImg).toHaveAttribute('alt', 'Pikachu sprite');
});

test('Teste se o card do pokémon contém um link para detalhes', () => {
  renderWithRouter(<App />);

  const detailsLink = screen.getByRole('link', { name: /More details/i });
  const detailsUrl = '/pokemons/25';
  expect(detailsLink).toBeDefined();
  expect(detailsLink).toHaveAttribute('href', detailsUrl);
});

test('Teste se ao clicar no link, é feito o redirecionamento para detalhes', () => {
  renderWithRouter(<App />);

  const detailsLink = screen.getByRole('link', { name: /More details/i });
  userEvent.click(detailsLink);
  const pikachuImg = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(pikachuImg).toBeInTheDocument();
});

test('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
  const { history } = renderWithRouter(<App />);

  const detailsLink = screen.getByRole('link', { name: /More details/i });
  userEvent.click(detailsLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');
});

test('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
  renderWithRouter(<App />);

  const detailsLink = screen.getByRole('link', { name: /More details/i });
  userEvent.click(detailsLink);

  const pikachuFavorite = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
  expect(pikachuFavorite).toBeInTheDocument();
  userEvent.click(pikachuFavorite);

  const starIcon = screen.getAllByRole('img');
  expect(starIcon[1]).toBeInTheDocument();
  expect(starIcon[1]).toHaveAttribute('src', '/star-icon.svg');
  expect(starIcon[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');

  const homeLink = screen.getByRole('link', { name: /Home/i });
  expect(homeLink).toBeInTheDocument();
  userEvent.click(homeLink);

  const starIcon2 = screen.getAllByRole('img');
  expect(starIcon2[1]).toBeInTheDocument();
  expect(starIcon2[1]).toHaveAttribute('src', '/star-icon.svg');
  expect(starIcon2[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');
});
