import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('', () => {});

describe('Testa o componente About', () => {
  it('contem h2 com o texto "About Pokédex"', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const aboutLinkElement = screen.getByRole('link', { name: /about/i });
    expect(aboutLinkElement).toBeInTheDocument();

    userEvent.click(aboutLinkElement);

    const aboutHeaderElement = screen.getByRole('heading', { name: /about pokédex/i });
    expect(aboutHeaderElement).toBeInTheDocument();
  });

  it('contem uma imagem e dois paragrafos com informacoes a respeito da pokedex"', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const aboutLinkElement = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLinkElement);

    const firstParagraph = screen.getByText('This application simulates a Pokédex,'
      + ' a digital encyclopedia containing all Pokémons');
    expect(firstParagraph).toBeInTheDocument();

    const secondParagraph = screen.getByText('One can filter Pokémons by type,'
      + ' and see more details for each one of them');
    expect(secondParagraph).toBeInTheDocument();

    const IMG_URL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const pokedexImg = screen.getByRole('img', { name: /pokédex/i });
    expect(pokedexImg).toBeInTheDocument();
    expect(pokedexImg).toHaveAttribute('src', IMG_URL);
  });
});
