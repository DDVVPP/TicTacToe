// eslint-disable-next-line import/no-extraneous-dependencies
import { Difficulty, Player } from "@TicTacToe-shared"
import '../../styles/style.css'
import { TicTacToeParamsProps } from "./types"

const TicTacToeParams = ({
  beginGame,
  boardIsDisabled,
  canBeginGame,
  difficulty,
  firstPlayer,
  setDifficulty,
  setFirstPlayer
}: TicTacToeParamsProps): JSX.Element => (
  <div className="logisticsContainer">

    <p>Who should go first?</p>
    <div className="playerContainer">
      <button disabled={!!firstPlayer} type="button" onClick={() => setFirstPlayer(Player.human)}>
        Me
      </button>
      <button disabled={!!firstPlayer} type="button" onClick={() => setFirstPlayer(Player.computer)}>
        Computer
      </button>
    </div>

    <p>Select difficulty</p>
    <div className="difficultyContainer">
      <button disabled={!!difficulty} type="button" onClick={() => setDifficulty(Difficulty.easy)}>
        Easy
      </button>
      <button disabled={!!difficulty} type="button" onClick={() => setDifficulty(Difficulty.hard)}>
        Hard
      </button>
    </div>

    <div className="startButtonContainer">
      <button disabled={!canBeginGame || !boardIsDisabled} type="button" onClick={() => beginGame()
      } className="startButton">
        Start
      </button>
    </div>
  </div>

)

export { TicTacToeParams };
