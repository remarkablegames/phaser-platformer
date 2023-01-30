import Phaser from 'phaser';

export default class TileMarker extends Phaser.GameObjects.Graphics {
  private map!: Phaser.Tilemaps.Tilemap;
  private groundLayer!: Phaser.Tilemaps.TilemapLayer;

  constructor(
    scene: Phaser.Scene,
    map: Phaser.Tilemaps.Tilemap,
    groundLayer: Phaser.Tilemaps.TilemapLayer
  ) {
    super(scene);
    this.map = map;
    this.groundLayer = groundLayer;

    this.lineStyle(5, 0xffffff, 1);
    this.strokeRect(0, 0, map.tileWidth, map.tileHeight);
    this.lineStyle(3, 0xff4f78, 1);
    this.strokeRect(0, 0, map.tileWidth, map.tileHeight);

    // Add the graphic to the scene
    scene.add.existing(this);
  }

  update() {
    const worldPoint = this.scene.input.activePointer.positionToCamera(
      this.scene.cameras.main
    ) as Phaser.Math.Vector2;
    const pointerTileXY = this.map.worldToTileXY(worldPoint.x, worldPoint.y);
    const snappedWorldPoint = this.map.tileToWorldXY(
      pointerTileXY.x,
      pointerTileXY.y
    );
    this.setPosition(snappedWorldPoint.x, snappedWorldPoint.y);

    // Draw or erase tiles (only within the groundLayer)
    if (this.scene.input.manager.activePointer.isDown) {
      this.groundLayer
        .putTileAtWorldXY(353, worldPoint.x, worldPoint.y)
        .setCollision(true);
    }
  }
}
