import { render, screen, waitFor } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { _, GameStatus } from "@TicTacToe-shared";
import { App } from './App';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalRef: any = global;
let mockData: GameStatus;

globalRef.fetch = jest.fn(() =>
  Promise.resolve({
    json: jest.fn(() => Promise.resolve(mockData)),
  }),
)

describe('App', () => {
  beforeEach(() => {
    mockData = {
      board: [_, _, _, _, _, _, _, _, _],
      winner: null,
    };
  });

  it('displays the initial board', async () => {
    render(<App />);
    await waitFor(() => {
      // feel free to update this test or delete it if tests like this aren't
      // useful for your development process
      const status = screen.getByText('Tic Tac Toe');
      expect(status).toBeInTheDocument();
    });
  });
});
