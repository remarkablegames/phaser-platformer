import './style.css';

import Phaser from 'phaser';

import * as scenes from './scenes';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */
new Phaser.Game({
  width: 1024,
  height: 768,
  title: 'Phaser Platformer',
  url: 'https://remarkablegames.org/phaser-platformer/',
  version: process.env.VERSION,
  scene: Object.values(scenes),
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
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
