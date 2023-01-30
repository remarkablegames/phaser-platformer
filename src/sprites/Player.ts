import Phaser from 'phaser';

import { key } from '../data';

enum Animation {
  Idle = 'Idle',
  Run = 'Run',
}

export default class Player extends Phaser.Physics.Arcade.Sprite {
  body!: Phaser.Physics.Arcade.Body;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture = key.spritesheet.player,
    frame = 0
  ) {
    super(scene, x, y, texture, frame);

    // Add the sprite to the scene
    scene.add.existing(this);

    // Enable physics for the sprite
    scene.physics.world.enable(this);

    // Add cursor keys
    this.cursors = scene.input.keyboard.createCursorKeys();

    // Create sprite animations
    this.createAnimations();

    // Create the physics-based sprite that we will move around and animate
    this.setDrag(1000, 0)
      .setMaxVelocity(300, 400)
      .setSize(18, 24)
      .setOffset(7, 9);
  }

  freeze() {
    this.body.moves = false;
  }

  private createAnimations() {
    // Create the animations we need from the player spritesheet
    const anims = this.scene.anims;
    anims.create({
      key: Animation.Idle,
      frames: anims.generateFrameNumbers(key.spritesheet.player, {
        start: 0,
        end: 3,
      }),
      frameRate: 3,
      repeat: -1,
    });

    anims.create({
      key: Animation.Run,
      frames: anims.generateFrameNumbers(key.spritesheet.player, {
        start: 8,
        end: 15,
      }),
      frameRate: 12,
      repeat: -1,
    });
  }

  update() {
    const acceleration = this.body.blocked.down ? 600 : 200;

    // Apply horizontal acceleration when left or right are applied
    switch (true) {
      case this.cursors.left.isDown:
        // No need to have a separate set of graphics for running to the left & to the right
        // Instead we can just mirror the sprite
        this.setFlipX(true);
        this.setAccelerationX(-acceleration);
        break;

      case this.cursors.right.isDown:
        this.setFlipX(false);
        this.setAccelerationX(acceleration);
        break;

      default:
        this.setAccelerationX(0);
    }

    // Only allow the player to jump if they are on the ground
    if (this.body.blocked.down && this.cursors.up.isDown) {
      this.setVelocityY(-500);
    }

    // Update the animation/texture based on the state of the player
    if (this.body.blocked.down) {
      this.anims.play(
        this.body.velocity.x ? Animation.Run : Animation.Idle,
        true
      );
    } else {
      this.anims.stop();
      this.setTexture(key.spritesheet.player, 10);
    }
  }
}
