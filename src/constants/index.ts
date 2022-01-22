import { map } from '../assets';

export const key = {
  image: {
    ground: 'ground',
    items: 'items',
    platform: 'platform',
  },

  scene: {
    boot: 'boot',
    main: 'main',
  },

  spritesheet: {
    player: 'player',
  },

  tilemap: {
    map: 'map',
  },

  tilemapTiledJSON: {
    map: 'map',
  },

  tileset: {
    ground: 'ground',
    items: 'items',
    platform: 'platform',
  },
} as const;

type LayerName = 'Tile Layer 1';
type TilesetName =
  | 'kenny_ground_64x64'
  | 'kenny_items_64x64'
  | 'kenny_platformer_64x64';

export const name = {
  layer: map.layers.reduce((previousValue, currentValue) => {
    const name = currentValue.name as LayerName;
    previousValue[name] = name;
    return previousValue;
  }, {} as Record<LayerName, LayerName>),

  tileset: map.tilesets.reduce((previousValue, currentValue) => {
    const name = currentValue.name as TilesetName;
    previousValue[name] = name;
    return previousValue;
  }, {} as Record<TilesetName, TilesetName>),
} as const;
