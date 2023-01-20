// eslint-disable-next-line import/no-extraneous-dependencies
import { Board, Difficulty, Player, WinnerKey, WinningLine } from "@TicTacToe-shared"
import { Dispatch, SetStateAction } from "react"

export type WinnerUseStateProps = {
  role: WinnerKey | null,
  winningLine?: WinningLine
}

export type TicTacToeBoardProps = {
  board: Board;
  boardIsDisabled: boolean;
  makeMove: (idx: number) => void;
  winner?: WinnerUseStateProps | null;
  winningIndices: number[];
}

export type TicTacToeParamsProps = {
  beginGame: () => void;
  boardIsDisabled: boolean;
  canBeginGame: boolean;
  difficulty: Difficulty | null;
  firstPlayer: Player | null;
  setDifficulty: Dispatch<SetStateAction<Difficulty | null>>;
  setFirstPlayer: Dispatch<SetStateAction<Player | null>>;
}
