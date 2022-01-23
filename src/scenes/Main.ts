import Phaser from 'phaser';

import * as assets from '../assets';
import { key } from '../constants';
import { Player } from '../sprites';

export default class Main extends Phaser.Scene {
  private player!: Player;

  constructor() {
    super({ key: key.scene.main });
  }

  create() {
    const map = this.make.tilemap({
      key: key.tilemap.map,
      tileWidth: assets.map.tilewidth,
      tileHeight: assets.map.tileheight,
    });

    const tilesetName = assets.map.tilesets[0].name;
    const groundTiles = map.addTilesetImage(tilesetName, key.image.ground);

    // To use multiple tilesets in a single layer, pass them in an array of instances or strings
    const layerName = assets.map.layers[0].name;
    const groundLayer = map.createLayer(layerName, [groundTiles]);

    // Have player collide with tiles
    this.player = new Player(this, 32, Number(this.game.config.height) - 150);
    groundLayer.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player, groundLayer);

    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
  }

  update(time: number, delta: number) {
    this.player.update();
  }
}
