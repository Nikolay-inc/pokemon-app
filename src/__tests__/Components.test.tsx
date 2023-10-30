import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PokemonMoves from '../components/PokemonMoves';
import PokemonStats from '../components/PokemonStats';
import Pagination from '../components/Pagination';
import PokemonItem from '../components/PokemonItem';
import { pokemonMovesData, pokemonStatsData } from './mock';

test('renders PokemonMoves correctly', () => {
  const { getByText } = render(<PokemonMoves pokemonMoves={pokemonMovesData} />);
  const moveName = getByText('Move 1');
  const learnMethod = getByText('Move Learn Method:');
  const learnMethodName = getByText('Method 1');
  const learnedLevel = getByText('Learned Level:');
  const learnedLevelValue = getByText('5');
  const versionGroup = getByText('Version Group:');
  const versionGroupValue = getByText('Group 1');

  expect(moveName).toBeInTheDocument();
  expect(learnMethod).toBeInTheDocument();
  expect(learnMethodName).toBeInTheDocument();
  expect(learnedLevel).toBeInTheDocument();
  expect(learnedLevelValue).toBeInTheDocument();
  expect(versionGroup).toBeInTheDocument();
  expect(versionGroupValue).toBeInTheDocument();
});

test('renders PokemonStats correctly', () => {
  const { getByText } = render(<PokemonStats pokemonStats={pokemonStatsData} />);
  const statName1 = getByText('Stat1');
  const baseStatValue1 = getByText('60');
  const effortValue1 = getByText('1');
  const statName2 = getByText('Stat2');
  const baseStatValue2 = getByText('80');

  expect(statName1).toBeInTheDocument();
  expect(baseStatValue1).toBeInTheDocument();
  expect(effortValue1).toBeInTheDocument();
  expect(statName2).toBeInTheDocument();
  expect(baseStatValue2).toBeInTheDocument();
});

test('renders pagination buttons correctly', () => {
  const pageHandler = jest.fn();
  const itemsPerPage = 10;
  const paggeOffset = 0;
  const itemsNumber = 20;

  const { getByText } = render(
    <Pagination
      pageHandler={pageHandler}
      itemsPerPage={itemsPerPage}
      paggeOffset={paggeOffset}
      itemsNumber={itemsNumber}
    />
  );

  const prevButton = getByText('Previos Page');
  const nextButton = getByText('Next Page');

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

test('calls pageHandler with the correct offset when Previos Page button is clicked', () => {
  const pageHandler = jest.fn();
  const itemsPerPage = 10;
  const paggeOffset = 10;
  const itemsNumber = 20;

  const { getByText } = render(
    <Pagination
      pageHandler={pageHandler}
      itemsPerPage={itemsPerPage}
      paggeOffset={paggeOffset}
      itemsNumber={itemsNumber}
    />
  );

  const prevButton = getByText('Previos Page');
  fireEvent.click(prevButton);

  expect(pageHandler).toHaveBeenCalledWith(-itemsPerPage);
});

test('calls pageHandler with the correct offset when Next Page button is clicked', () => {
  const pageHandler = jest.fn();
  const itemsPerPage = 10;
  const paggeOffset = 0;
  const itemsNumber = 20;

  const { getByText } = render(
    <Pagination
      pageHandler={pageHandler}
      itemsPerPage={itemsPerPage}
      paggeOffset={paggeOffset}
      itemsNumber={itemsNumber}
    />
  );

  const nextButton = getByText('Next Page');
  fireEvent.click(nextButton);

  expect(pageHandler).toHaveBeenCalledWith(itemsPerPage);
});

test('renders Pokemon name and "Details" button correctly', () => {
  const pokemonName = 'Pikachu';
  const { getByText, getByRole } = render(
    <Router>
      <PokemonItem pokemonName={pokemonName} />
    </Router>
  );

  const nameElement = getByText(pokemonName);
  const detailsButton = getByRole('button', { name: 'Details' });

  expect(nameElement).toBeInTheDocument();
  expect(detailsButton).toBeInTheDocument();
});

test('navigates to the correct route when "Details" button is clicked', () => {
  const pokemonName = 'Pikachu';
  const { getByRole } = render(
    <Router>
      <PokemonItem pokemonName={pokemonName} />
    </Router>
  );

  const detailsButton = getByRole('button', { name: 'Details' });
  detailsButton.click();
});
