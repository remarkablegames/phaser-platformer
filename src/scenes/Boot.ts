import { Scene } from 'phaser';

import { KEY } from '../constants';

export class Boot extends Scene {
  constructor() {
    super(KEY.SCENE.BOOT);
  }

  preload() {
    this.load.spritesheet(
      KEY.SPRITESHEET.PLAYER,
      '/sprites/0x72-industrial-player-32px-extruded.png',
      {
        frameWidth: 32,
        frameHeight: 32,
        margin: 1,
        spacing: 2,
      },
    );

    this.load.image(KEY.IMAGE.SPIKE, '/sprites/0x72-industrial-spike.png');

    this.load.image(
      KEY.IMAGE.TILES,
      '/tilemaps/0x72-industrial-tileset-32px-extruded.png',
    );

    this.load.tilemapTiledJSON(
      KEY.TILEMAP.PLATFORMER,
      '/tilemaps/platformer.json',
    );
  }

  create() {
    this.scene.start(KEY.SCENE.MAIN);
  }
}
