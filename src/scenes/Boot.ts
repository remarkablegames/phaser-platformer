import Phaser from 'phaser';

import * as assets from '../assets';
import { key } from '../constants';

export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: key.scene.boot });
  }

  preload() {
    this.load.image(key.image.ground, assets.ground);
    this.load.image(key.image.items, assets.items);
    this.load.image(key.image.platform, assets.platform);
    this.load.spritesheet(key.spritesheet.player, assets.player, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.tilemapTiledJSON(key.tilemapTiledJSON.map, assets.map);
  }

  create() {
    this.scene.start(key.scene.main);
  }
}
