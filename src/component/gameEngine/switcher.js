import YasyaGame from './YasyaGame.js';
import NikoGame from './NikoGame.js';
import YelyaGame from './YelyaGame.js';
import { HEROES_ID } from '@src/constant/heroes.js';

export default function switcher(heroID) {
    switch (heroID) {
        case (HEROES_ID.yasya):
            return YasyaGame;
        case (HEROES_ID.niko):
            return NikoGame;
        case (HEROES_ID.yelya):
            return YelyaGame;
        case (HEROES_ID.natasha):
            return YasyaGame;
        case (HEROES_ID.vitya):
            return YelyaGame;
        case (HEROES_ID.saliy):
            return NikoGame;
        case (HEROES_ID.nester):
            return NikoGame;
        default:
            return null;
    }
}
