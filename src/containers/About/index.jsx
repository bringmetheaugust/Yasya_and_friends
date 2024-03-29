import React, { useContext } from 'react';

import css from './style.module.sass';
import { GameContext } from '@src/App.jsx';

const ABOUT_ME = `
    Хочу поблагодарить всех, кто поддерживал меня в моих безнадежных начинаниях,
    всех, у кого были сомнения в успехе этой затеи и тех, кто ни минуты не сомневался.
    <br/>
    Так же благодарен тем, кто был рядом с самого начала, и тем, кто не сумел остаться до самого конца.
`;

const About = () => {
    const context = useContext(GameContext);

    return (
        <section className={css.about}>
            <audio autoPlay>
                <source src={require('@src/media/about/about.mp3').default} type="audio/mpeg" />
            </audio>
            <div className={css.me}>
                <img src={require('@src/media/about/me.jpg').default} />
                <div className={css.txt} dangerouslySetInnerHTML={{ __html: ABOUT_ME }} />
            </div>
            <div className={css.heroes}>
                <h1>о наших героях</h1>
                {
                    context.heroes.map(hero =>
                        <ul className={css.hero} key={hero.id}>
                            <li className={css.title}>
                                <h2>{hero.name}</h2>
                                <img src={hero.heroImg} />
                            </li>
                            <div className={css.txt}>{hero.about}</div>
                        </ul>
                    )
                }
            </div>
            <div className={css.bye}>до встречи в аду!</div>
        </section>
    );
};

export default About;
