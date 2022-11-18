import React from 'react';
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {LeftBar} from "./components/LeftBar/LeftBar";
import {RightBar} from "./components/RightBar/RightBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/state";

import s from './App.module.css';

type AppPropsType = {
    store: StoreType
}

export const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()


    //JSX
    return (
        <div className={s.wrapper}>
            <Header/>
            <LeftBar/>
            <RightBar/>
            <div className={s.content}>
                <Route path={'/profile'} render={() => <Profile
                    data={state.profilePage}
                    addPostCallback={props.store.addPost.bind(props.store)}
                    updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs
                    data={state.dialogsPage}/>}/>



                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    )
}

