import YasyaGame from './YasyaGame/index.js';
import NikoGame from './NikoGame/index.js';
import YelyaGame from './YelyaGame/index.js';
import NatashaGame from './NatashaGame/index.js';
import VityaGame from './VityaGame/index.js';
import { HEROES_ID } from '@src/constant/heroes.js';

export default function switcher(heroID) {
    switch (heroID) {
        case (HEROES_ID.yasya): return YasyaGame;
        case (HEROES_ID.niko): return NikoGame;
        case (HEROES_ID.yelya): return YelyaGame;
        case (HEROES_ID.natasha): return NatashaGame;
        case (HEROES_ID.vitya): return VityaGame;
        default: return null;
    }
}
