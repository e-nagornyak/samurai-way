import React from 'react';
import s from './Header.module.css'

import home from '../../img/logo/home.svg'
import search from '../../img/logo/search.svg'
import notification from '../../img/logo/notification.svg'
import messages from '../../img/logo/messages.svg'
import users from '../../img/logo/users.svg'
import avatar from '../../img/avatar.png'
import logo from '../../img/logo.png'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <img className={s.logo}
                     src={logo}
                     alt="logo"/>
                <h2 className={s.name_logo}>Letim</h2>
            </div>
            <label>
                <input type="text"/>
                <img src={search} alt=""/>
            </label>
            <div className={s.nav}>
                <a><img src={home} alt="home icon"/> </a>
                <a><img src={users} alt="users icon"/> </a>
                <a><img src={notification} alt="notification icon"/> </a>
                <a><img src={messages} alt="messages icon"/> </a>
                <img className={s.avatar} src={avatar} alt=""/>
                <span>Name </span>
                <span>Surname</span>
            </div>


        </header>
    );
};

