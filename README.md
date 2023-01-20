# TicTacToe

This is the TicTacToe challenge. You will use this code base starter to finish building a client/server tic-tac-toe game. Further instructions can be found in the [Frontend Challenge README](README_FRONTEND.md).

## Project structure

This project is built as a monorepo using [yarn workspaces](https://yarnpkg.com/features/workspaces). It contains 3 packages:

1. `client` - The client and UI portion of the TicTacToe game
1. `server` - The server and AI portion of the TicTacToe game
1. `shared` - TypeScript types and constants that are shared between the client and server

## Development environment

#### Monorepo root

```sh
$> yarn install
```

#### Client

```sh
$> yarn workspace TicTacToe-client start
```

> The UI should be accessible at `http://localhost:3000`

#### Server

```sh
$> yarn workspace TicTacToe-server start
```

#### Linting

From the monorepo root

```sh
$> yarn lint
```

#### Typechecking

```sh
$> yarn typecheck
```

#### Testing

From the monorepo root

```sh
$> yarn test
```

## Tooling used

### Node

This project was built using the [current LTS version of Node](https://nodejs.org/en/about/releases/) (lts/gallium)

### TypeScript

This project was built with [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)

### Package management

[yarn v3](https://yarnpkg.com/getting-started/usage) is the package manager for this code base. Since we're using node v16.13+ you may use [Corepack](https://yarnpkg.com/getting-started/install) to install yarn if you don't already have it installed.

#### Yarn Primer

- `yarn install` to install dependencies

### Bundling

[webpack](https://webpack.js.org/concepts/) to assist with transpiling and bundling both the client and server packages.

### Code standards

#### Linting

[ESLint](https://eslint.org/docs/user-guide/getting-started) and the [Airbnb's linting rules](https://www.npmjs.com/package/eslint-config-airbnb) with a few minor customizations.

#### Formatting

[Prettier](https://prettier.io/docs/en/index.html)

### Testing

[Jest](https://jestjs.io/docs/getting-started) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
