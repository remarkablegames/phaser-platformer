<p align="center">
  <img src="public/logo192.png" alt="Phaser Platformer">
</p>

# Phaser Platformer

[![release](https://img.shields.io/github/v/release/remarkablegames/phaser-platformer)](https://github.com/remarkablegames/phaser-platformer/releases)
[![build](https://github.com/remarkablegames/phaser-platformer/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablegames/phaser-platformer/actions/workflows/build.yml)

<kbd>phaser-platformer</kbd> is a template for making [Phaser](https://phaser.io/) platformer games. The template is inspired by [`phaser-3-tilemap-blog-posts`](https://github.com/mikewesthad/phaser-3-tilemap-blog-posts/tree/master/examples/post-2) (read the [Medium story](https://itnext.io/3d68e73d494a)).

Play the game on:

- [remarkablegames](https://remarkablegames.org/phaser-platformer/)

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm#readme)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/phaser-platformer.git
cd phaser-platformer
```

Install the dependencies:

```sh
npm install
```

Rename the project:

```sh
git grep -l phaser-platformer | xargs sed -i '' -e 's/phaser-platformer/my-game/g'
```

```sh
git grep -l 'Phaser Platformer' | xargs sed -i '' -e 's/Phaser Platformer/My Game/g'
```

Update the files:

- [ ] `README.md`
- [ ] `index.html`
- [ ] `package.json`
- [ ] `public/*.png`
- [ ] `public/manifest.json`
- [ ] `src/index.ts`

## Environment Variables

Update the environment variables:

```sh
cp .env .env.local
```

Update the **Secrets** in the repository **Settings**.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

You will also see any errors in the console.

### `npm run build`

Builds the game for production to the `dist` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

### `npm run bundle`

Builds the game and compresses the contents into a ZIP archive in the `dist` folder.

Your game can be uploaded to your server, [itch.io](https://itch.io/), [newgrounds](https://www.newgrounds.com/), etc.

## License

[MIT](LICENSE)
