import React from 'react';
import css from './style.module.sass';

const About = () => 
    <section className={css.about}>
        <div className={css.me}>
            <img src={require('@src/media/about/me.jpg')} />
            <div className={css.txt}>
                хочу поблагодарить всех, кто меня поддерживал
            </div>
        </div>
        <div className={css.heroes}>
            <h1>о наших героях</h1>
        </div>
    </section>

export default About;
