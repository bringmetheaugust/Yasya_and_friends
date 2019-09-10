export default class GameEngine {
    constructor() {

    }
    init(reactRef) {
        this.ctx = reactRef.getContext('2d');
    }
}
