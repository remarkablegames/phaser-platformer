import Phaser from 'phaser';

export class TileMarker extends Phaser.GameObjects.Graphics {
  private map!: Phaser.Tilemaps.Tilemap;
  private groundLayer!: Phaser.Tilemaps.TilemapLayer;

  constructor(
    scene: Phaser.Scene,
    map: Phaser.Tilemaps.Tilemap,
    groundLayer: Phaser.Tilemaps.TilemapLayer,
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
    // Convert the mouse position to world position within the camera
    const worldPoint = this.scene.input.activePointer.positionToCamera(
      this.scene.cameras.main,
    ) as Phaser.Math.Vector2;

    // Place the marker in world space, but snap it to the tile grid. If we convert world -> tile and
    // then tile -> world, we end up with the position of the tile under the pointer
    const pointerTileXY = this.map.worldToTileXY(worldPoint.x, worldPoint.y)!;
    const snappedWorldPoint = this.map.tileToWorldXY(
      pointerTileXY.x,
      pointerTileXY.y,
    )!;
    this.setPosition(snappedWorldPoint.x, snappedWorldPoint.y);

    // When mouse is down, put a colliding tile at the mouse location
    // Draw or erase tiles (only within the groundLayer)
    const { activePointer } = this.scene.input.manager;
    if (activePointer.leftButtonDown()) {
      try {
        this.groundLayer
          .putTileAtWorldXY(6, worldPoint.x, worldPoint.y)
          .setCollision(true);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        // don't draw tile if outside of game world
      }
    } else if (activePointer.rightButtonDown()) {
      this.groundLayer.removeTileAtWorldXY(worldPoint.x, worldPoint.y);
    }
  }
}
