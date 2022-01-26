import './style.css';

import { Game, Scale } from 'phaser';

import { Boot, Main } from './scenes';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */
const config = {
  width: 1024,
  height: 768,
  title: 'Phaser Platformer',
  url: 'https://remarkablegames.org/phaser-platformer/',
  version: process.env.VERSION,
  scene: [Boot, Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 400,
      },
      debug: !isProduction,
    },
  },
  disableContextMenu: isProduction,
  backgroundColor: '#fff',
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
};

new Game(config);
