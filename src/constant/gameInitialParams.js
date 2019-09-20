//item types
export const ENEMY_TYPE = 'enemy';
export const SPEED_ITEM_TYPE = 'speed_item';
export const DESTROY_ALL_ITEM_TYPE = 'destroy_all';
export const FROZEN_ITEM_TYPE = 'frozen_item';

//game params
export const DEFAULT_COORDINATES = {
    id: null,
    x: null,
    y: null,
    angle: 0,
    type: ENEMY_TYPE
};
export const GRID_DENSITY = 10;
export const ACCELERATION = .999;
export const HERO_SPEED = 100;
export const ENEMY_SPEED = 1;
export const CURSOR_CLICK_COLOR = '#f95de6';
export const FROZEN_ITEM_EFFECT_COEFICIENT = .5;
export const ITEM_BOARD_SIZE = 3; //3 this.iconSize;

//item's icon images
export const SPEED_ITEM = require('@src/media/items/speedItem/item.jpg');
export const DESTROT_ALL_ITEM = require('@src/media/items/destroyAll/item.png');
export const FROZEN_ITEM = require('@src/media/items/frozenItem/item.jpg');

//item's board images
export const SPEED_ITEM_BOARD = require('@src/media/items/speedItem/board.gif');
export const DESTROT_ALL_ITEM_BOARD = require('@src/media/items/destroyAll/board.gif');
export const FROZEN_ITEM_BOARD = require('@src/media/items/frozenItem/board.gif');

//other images
export const DEAD_HERO = require('@src/media/heroes/dead.png');
