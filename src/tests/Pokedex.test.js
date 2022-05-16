import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);

  const encounteredPokemons = screen
    .getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
  expect(encounteredPokemons).toBeInTheDocument();
});

test('Teste se é exibido o próximo pokémon quando Próximo pokémon é clicado', () => {
  renderWithRouter(<App />);

  const proximoPokemonBtn = screen
    .getByRole('button', { name: /Próximo pokémon/i });
  expect(proximoPokemonBtn).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const charmanderSprite = screen.getByRole('img', { name: /Charmander sprite/i });
  expect(charmanderSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const caterpieSprite = screen.getByRole('img', { name: /Caterpie sprite/i });
  expect(caterpieSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const ekansSprite = screen.getByRole('img', { name: /Ekans sprite/i });
  expect(ekansSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const alakazamSprite = screen.getByRole('img', { name: /Alakazam sprite/i });
  expect(alakazamSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const mewSprite = screen.getByRole('img', { name: /Mew sprite/i });
  expect(mewSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const rapidashSprite = screen.getByRole('img', { name: /Rapidash sprite/i });
  expect(rapidashSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const snorlaxSprite = screen.getByRole('img', { name: /Snorlax sprite/i });
  expect(snorlaxSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const dragonairSprite = screen.getByRole('img', { name: /Dragonair sprite/i });
  expect(dragonairSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);

  const pikachuSprite = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(pikachuSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);
});

test('Teste se é mostrado apenas um pokémon por vez', () => {
  renderWithRouter(<App />);

  const detailsLink = screen.getAllByRole('link', { name: /More details/i });
  expect(detailsLink.length).toBe(1);
});

test('Teste se a Pokédex tem os botões de filtro', () => {
  renderWithRouter(<App />);

  const proximoPokemonBtn = screen
    .getByRole('button', { name: /Próximo pokémon/i });
  expect(proximoPokemonBtn).toBeInTheDocument();

  const allFilter = screen.getByTestId('');
  expect(allFilter).toBeInTheDocument();

  const typeFilter = screen.getAllByTestId('pokemon-type-button');

  expect(typeFilter[0]).toBeInTheDocument();
  expect(typeFilter[0]).toHaveTextContent('Electric');
  userEvent.click(typeFilter[0]);
  const pikachuSprite = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(pikachuSprite).toBeInTheDocument();

  expect(typeFilter[1]).toBeInTheDocument();
  expect(typeFilter[1]).toHaveTextContent('Fire');
  userEvent.click(typeFilter[1]);
  const charmanderSprite = screen.getByRole('img', { name: /Charmander sprite/i });
  expect(charmanderSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);
  const rapidashSprite = screen.getByRole('img', { name: /Rapidash sprite/i });
  expect(rapidashSprite).toBeInTheDocument();

  expect(typeFilter[2]).toBeInTheDocument();
  expect(typeFilter[2]).toHaveTextContent('Bug');
  userEvent.click(typeFilter[2]);
  const caterpieSprite = screen.getByRole('img', { name: /Caterpie sprite/i });
  expect(caterpieSprite).toBeInTheDocument();

  expect(typeFilter[3]).toBeInTheDocument();
  expect(typeFilter[3]).toHaveTextContent('Poison');
  userEvent.click(typeFilter[3]);
  const ekansSprite = screen.getByRole('img', { name: /Ekans sprite/i });
  expect(ekansSprite).toBeInTheDocument();

  expect(typeFilter[4]).toBeInTheDocument();
  expect(typeFilter[4]).toHaveTextContent('Psychic');
  userEvent.click(typeFilter[4]);
  const alakazamSprite = screen.getByRole('img', { name: /Alakazam sprite/i });
  expect(alakazamSprite).toBeInTheDocument();
  userEvent.click(proximoPokemonBtn);
  const mewSprite = screen.getByRole('img', { name: /Mew sprite/i });
  expect(mewSprite).toBeInTheDocument();

  expect(typeFilter[5]).toBeInTheDocument();
  expect(typeFilter[5]).toHaveTextContent('Normal');
  userEvent.click(typeFilter[5]);
  const snorlaxSprite = screen.getByRole('img', { name: /Snorlax sprite/i });
  expect(snorlaxSprite).toBeInTheDocument();

  expect(typeFilter[6]).toBeInTheDocument();
  expect(typeFilter[6]).toHaveTextContent('Dragon');
  userEvent.click(typeFilter[6]);
  const dragonairSprite = screen.getByRole('img', { name: /Dragonair sprite/i });
  expect(dragonairSprite).toBeInTheDocument();
});

test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
  renderWithRouter(<App />);

  const allFilter = screen.getByRole('button', { name: /All/i });
  expect(allFilter).toBeInTheDocument();
  userEvent.click(allFilter);
  const pikachuSprite = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(pikachuSprite).toBeInTheDocument();
});
