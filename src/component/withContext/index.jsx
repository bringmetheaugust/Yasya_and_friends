import { GameContext } from '../App.jsx';

export default withContext = (Component) => {
    return (props) =>
        <Game.Proveder>
            {ctx => <Component {...props} ctx={ctx} />}
        </Game.Proveder>
}
