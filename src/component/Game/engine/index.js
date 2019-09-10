export default class GameEngine {
    constructor(selectedHero) {
        this.hero = selectedHero;
    }
    init(reactRef) {
        this.ctx = reactRef.getContext('2d');
    }
}
