import { Scene } from 'phaser';

import * as assets from '../assets';
import { KEY } from '../constants';

export class Boot extends Scene {
  constructor() {
    super(KEY.SCENE.BOOT);
  }

  preload() {
    this.load.spritesheet(KEY.SPRITESHEET.PLAYER, assets.spritesheets.player, {
      frameWidth: 32,
      frameHeight: 32,
      margin: 1,
      spacing: 2,
    });

    this.load.image(KEY.IMAGE.SPIKE, assets.images.spike);

    this.load.image(KEY.IMAGE.TILES, assets.tilemaps.industrial);

    this.load.tilemapTiledJSON(
      KEY.TILEMAP.PLATFORMER,
      assets.tilemaps.platformer,
    );
  }

  create() {
    this.scene.start(KEY.SCENE.MAIN);
  }
}
