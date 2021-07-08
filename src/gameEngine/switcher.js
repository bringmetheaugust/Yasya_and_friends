import rallyGameType from '@engine/rallyGameType.js';
import hungryGameType from '@engine/hungryGameType.js';
import rabbitGameType from '@engine/rabbitGameType.js';

import { HUNGRY_GAME_TYPE, RALLY_GAME_TYPE, RABBIT_GAME_TYPE } from '@constants/gameTypes.js';

export default function switcher(heroesGameType) {
    switch (heroesGameType) {
        case (RALLY_GAME_TYPE):
            return rallyGameType;
        case (HUNGRY_GAME_TYPE):
            return hungryGameType;
        case (RABBIT_GAME_TYPE):
            return rabbitGameType;
        default:
            return null;
    }
}
