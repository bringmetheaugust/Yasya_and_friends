import React from 'react';
import css from './style.module.sass';
import withContext from '../withContext/index.jsx';

const About = ({ ctx }) => 
    <section className={css.about}>
        <div className={css.me}>
            <img src={require('@src/media/about/me.jpg')} />
            <div>
                хочу поблагодарить всех, кто меня поддерживал
            </div>
        </div>
        <div className={css.heroes}>
            <h1>о наших героях</h1>
            {
                ctx.heroes.map(hero =>
                    <div className={css.hero}>
                        <h2>{hero.name}</h2>
                        <div>{hero.description}</div>
                        <img src={hero.heroImg} />
                    </div>
                )
            }
        </div>
    </section>

export default withContext(About);
