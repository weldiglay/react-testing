import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';

test('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemons />);

  const noFavoriteFound = screen.getByText(/No favorite pokemon found/i);
  expect(noFavoriteFound).toBeInTheDocument();
});

test('Teste se são exibidos todos os cards de pokémons favoritados', () => {
  renderWithRouter(<App />);

  const detailsLink = screen.getByRole('link', { name: /More details/i });
  userEvent.click(detailsLink);

  const pikachuImg = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(pikachuImg).toBeInTheDocument();

  const pikachuFavorite = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
  expect(pikachuFavorite).toBeInTheDocument();
  userEvent.click(pikachuFavorite);

  const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
  expect(favoriteLink).toBeInTheDocument();
  userEvent.click(favoriteLink);

  const pikachuImg2 = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(pikachuImg2).toBeInTheDocument();
});

// As aulas de videos sao as melhores para aprender, continuar por favor
