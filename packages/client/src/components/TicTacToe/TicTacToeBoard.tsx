import '../../styles/style.css'
import { TicTacToeBoardProps } from './types';

const TicTacToeBoard = ({
  board,
  boardIsDisabled,
  makeMove,
  winner,
  winningIndices
}: TicTacToeBoardProps): JSX.Element => (
  <div className="gridContainer">
    {board.map((cell, idx) =>
      <button
        disabled={boardIsDisabled || !!winner}
        className={winner?.winningLine?.row && winningIndices.includes(idx) ? "winningCell" : "cell"} onClick={() => {
          makeMove(idx)
        }}
        type="button"
      >
        {cell}
      </button>)}
  </div>
)


export { TicTacToeBoard };
