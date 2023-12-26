import Phaser from 'phaser';

import scenes from './scenes';

/**
 * https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */
new Phaser.Game({
  width: 1200, // 1024
  height: 600, // 768
  title: 'Phaser Platformer',
  url: import.meta.env.VITE_APP_HOMEPAGE,
  version: import.meta.env.VITE_APP_VERSION,
  scene: scenes,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 1000,
      },
      debug: import.meta.env.DEV,
    },
  },
  disableContextMenu: import.meta.env.PROD,
  backgroundColor: '#1d212d',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true,
});
