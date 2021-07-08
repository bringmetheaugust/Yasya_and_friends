import { ENEMY_TYPE } from '@constants/itemTypes.js';

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
export const ITEM_BOARD_SIZE = 3; // 3 this.iconSize;
