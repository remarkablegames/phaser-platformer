import Phaser from 'phaser';

import scenes from './scenes';
import { isDevelopment } from './utils';

/**
 * https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */
new Phaser.Game({
  width: 1200, // 1024
  height: 600, // 768
  title: 'Phaser Platformer',
  url: process.env.URL,
  version: process.env.VERSION,
  scene: scenes,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 1000,
      },
      debug: isDevelopment,
    },
  },
  disableContextMenu: true,
  backgroundColor: '#1d212d',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,
});
