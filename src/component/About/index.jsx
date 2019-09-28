import React from 'react';
import css from './style.module.sass';
import withContext from '../withContext/index.jsx';

import ABOUT_ME from '@src/constant/aboutMe.js';

const ABOUT_AUDIO = require('@src/media/about/about.mp3');

const About = ({ ctx }) => 
    <section className={css.about}>
        <audio autoPlay>
			{/* <source src={ABOUT_AUDIO} type="audio/mpeg" /> */}
		</audio>
        <div className={css.me}>
            <img src={require('@src/media/about/me.jpg')} />
            <div className={css.txt} dangerouslySetInnerHTML={{ __html: ABOUT_ME }}></div>
        </div>
        <div className={css.heroes}>
            <h1>о наших героях</h1>
            {
                ctx.heroes.map(hero =>
                    <div className={css.hero} key={hero.id}>
                        <div className={css.txt}>{hero.description}</div>
                        <img src={hero.heroImg} />
                    </div>
                )
            }
        </div>
        <div className={css.bye}>до встречи в аду!</div>
    </section>

export default withContext(About);
