import './index.css';

import { Game, Scale } from 'phaser';

import { Boot, Main } from './scenes';

/**
 * https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */
const config = {
  width: 1024,
  height: 768,
  title: 'Phaser Platformer',
  url: 'https://remarkablegames.org/phaser-platformer/',
  // see `.env` and `package.json`
  version: process.env.WEB_APP_VERSION,
  scene: [Boot, Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 400,
      },
      debug: process.env.NODE_ENV === 'development',
    },
  },
  disableContextMenu: true,
  backgroundColor: '#fff',
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
};

new Game(config);
