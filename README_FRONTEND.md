# TicTacToe Frontend Take Home Challenge

## The challenge

This project is a partially completed client/server tic-tac-toe game. Your mission will be to complete the code and produce a working game.

## The rules

- An ideal solution will implement:
  - A game board
    - Displays the current state of the board
    - Allows the user to play a move
    - Indicates the winning line
  - A status indicator
    - Displays when the game is over
    - Displays who won or indicates a tie
  - A control to begin a new game
  - A control to select which player should move first
  - A control to select the difficulty level

## What we are providing

This project has a fully working API with the game playing AI implemented. This API provides 2 endpoints to update the game status (see `api.ts` below)

## Additional info

Some skeleton components have been provided as a kick-off point:

- [App.tsx](./packages/client/src/components/App.tsx)
- [api.ts](./packages/client/src/api.ts) - This provides async interaction with the API
- [styles](./packages/client/src/styles) - Just the reset styles for various browsers

Note that all API endpoints are prefixed with `/api`, e.g. `/api/begin` instead of just `/begin`. But you can just use the provided API helpers in [api.ts](./packages/client/src/api.ts) to hit the API.
