import YasyaGame from '@engine/YasyaGame.js';
import NikoGame from '@engine/NikoGame.js';
import YelyaGame from '@engine/YelyaGame.js';
import { HEROES_ID } from '@constants/heroes.js';

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
        case (HEROES_ID.dasha):
            return NikoGame;
        default:
            return null;
    }
}
