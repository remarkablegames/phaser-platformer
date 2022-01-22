import Phaser from 'phaser';

import { key, name } from '../constants';
import { Player } from '../sprites';

let player: Player;

export default class Main extends Phaser.Scene {
  constructor() {
    super({ key: key.scene.main });
  }

  create() {
    const map = this.make.tilemap({ key: key.tilemap.map });

    const groundTiles = map.addTilesetImage(
      name.tileset.kenny_ground_64x64,
      key.tileset.ground
    );
    const itemTiles = map.addTilesetImage(
      name.tileset.kenny_items_64x64,
      key.tileset.items
    );
    const platformTiles = map.addTilesetImage(
      name.tileset.kenny_platformer_64x64,
      key.tileset.platform
    );

    // To use multiple tilesets in a single layer, pass them in an array like this
    map.createLayer(name.layer['Tile Layer 1'], [
      groundTiles,
      itemTiles,
      platformTiles,
    ]);

    // map.createLayer('Tile Layer 1', [groundTiles, itemTiles, platformTiles]);

    // Or pass an array of tileset name strings
    // map.createLayer('Tile Layer 1', ['kenny_ground_64x64', 'kenny_items_64x64', 'kenny_platformer_64x64']);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    player = new Player(this, 32, Number(this.game.config.height) - 150);
    this.cameras.main.startFollow(player);
  }

  update(time: number, delta: number) {
    player.update();
  }
}
