import React from 'react';
import s from './Music.module.css'

type MusicType = {}

export const Music = (props: MusicType) => {
    return (
        <div className={s.content}>
            <h1>It`s music component</h1>
        </div>
    );
};



