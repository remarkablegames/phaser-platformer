import { Scene } from 'phaser';

import * as assets from '../assets';
import { key } from '../data';

export default class Boot extends Scene {
  constructor() {
    super(key.scene.boot);
  }

  preload() {
    this.load.spritesheet(key.spritesheet.player, assets.spritesheets.player, {
      frameWidth: 32,
      frameHeight: 32,
      margin: 1,
      spacing: 2,
    });
    this.load.image(key.image.spike, assets.images.spike);
    this.load.image(key.image.tiles, assets.tilesets.industrial);
    this.load.tilemapTiledJSON(
      key.tilemap.platformer,
      assets.tilemaps.platformer,
    );
  }

  create() {
    this.scene.start(key.scene.main);
  }
}
