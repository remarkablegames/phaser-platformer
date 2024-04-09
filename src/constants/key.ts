const image = {
  spike: 'spike',
  tiles: 'tiles',
} as const;

const scene = {
  boot: 'boot',
  main: 'main',
} as const;

const spritesheet = {
  player: 'player',
} as const;

const tilemap = {
  platformer: 'platformer',
} as const;

export const key = {
  image,
  scene,
  spritesheet,
  tilemap,
} as const;
