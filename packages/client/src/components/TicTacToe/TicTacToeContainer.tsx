import { useState } from "react"

// eslint-disable-next-line import/no-extraneous-dependencies
import { _, Board, Difficulty, Player, Marker, Winner, GameStatus } from "@TicTacToe-shared"
import { begin, move } from "../../api"

import '../../styles/style.css'
import { TicTacToeBoard } from "./TicTacToeBoard"
import { TicTacToeParams } from "./TicTacToeParams"
import { WinnerUseStateProps } from "./types"

const TicTacToeContainer = () => {
  const [board, setBoard] = useState<Board>([_, _, _, _, _, _, _, _, _])
  const [boardIsDisabled, setBoardIsDisabled] = useState(true);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null)
  const [firstPlayer, setFirstPlayer] = useState<Player | null>(null)
  const [winner, setWinner] = useState<WinnerUseStateProps | null>(null)
  const [winningIndices, setWinningIndices] = useState<number[]>([])

  const canBeginGame = Boolean(firstPlayer && difficulty)

  const findWinningLine = (status: GameStatus) => {
    const rowOne: number[] = [];
    const rowTwo: number[] = [];
    const rowThree: number[] = [];

    const newBoardOfIndices: number[][] = [rowOne, rowTwo, rowThree]

    for (let i = 0; i < board.length; i += 1) {
      switch (true) {
        case [0, 1, 2].includes(i):
          rowOne.push(i)
          break;
        case [3, 4, 5].includes(i):
          rowTwo.push(i)
          break;
        case [6, 7, 8].includes(i):
          rowThree.push(i)
          break;
        default:
          break;
      }

    }

    setWinner({ role: status.winner, winningLine: status.winningLine })

    if (status?.winningLine?.row) {
      setWinningIndices(newBoardOfIndices[status?.winningLine?.row])
    }

    // TODO: Need to figure out the rest of this method to include column and diagonal winningLines
  }

  // TODO: Write unit tests for each condition below
  const renderWinnerText = () => {
    switch (true) {
      case winner?.role === Marker.x && firstPlayer === Player.human:
        return <h1>You Won!</h1>
      case winner?.role === Marker.x && firstPlayer === Player.computer:
        return <h1>You Lost =/</h1>
      case winner?.role === Marker.o && firstPlayer === Player.computer:
        return <h1>You Won!</h1>
      case winner?.role === Marker.o && firstPlayer === Player.human:
        return <h1>You Lost =/</h1>
      case winner?.role === Winner.tie:
        return <h1>You tied...</h1>
      default:
        return null;
    }
  }

  const beginGame = async () => {
    try {
      setBoardIsDisabled(false)
      if (firstPlayer && difficulty) {
        const status = await begin(difficulty, firstPlayer)
        if (status) {
          setBoard(status?.board)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const makeMove = async (idx: number) => {
    try {
      if (board && firstPlayer === Player.human) {
        board[idx] = Marker.x
      } else if (board && firstPlayer === Player.computer) {
        board[idx] = Marker.o
      }
      if (difficulty) {
        const status = await move(board, difficulty)
        if (status) {
          setBoard(status?.board)
        }
        if (status.winner) {
          findWinningLine(status)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }



  return (
    <div className="layoutContainer">
      <h1>Tic Tac Toe</h1>

      <TicTacToeParams
        beginGame={beginGame}
        boardIsDisabled={boardIsDisabled}
        canBeginGame={canBeginGame}
        difficulty={difficulty}
        firstPlayer={firstPlayer}
        setDifficulty={setDifficulty}
        setFirstPlayer={setFirstPlayer}
      />

      <TicTacToeBoard
        board={board}
        boardIsDisabled={boardIsDisabled}
        makeMove={makeMove}
        winner={winner}
        winningIndices={winningIndices}
      />

      {winner && renderWinnerText()}
    </div>

  )
}

export { TicTacToeContainer };
