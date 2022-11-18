import {v1} from "uuid";

export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}

export type StateType = {
    profilePage: {
        posts: PostsType[]
        newPostText: string
    }
    dialogsPage: {
        messages: MessagesType[]
        dialogs: DialogsType[]
    }
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'How are you?', likesCount: 23},
                {id: v1(), message: 'Hello!', likesCount: 12},
                {id: v1(), message: 'Hello!', likesCount: 0},
                {id: v1(), message: 'Hello!', likesCount: 5}
            ],
            newPostText: '',
        },
        dialogsPage: {
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'How'},
                {id: v1(), message: 'Yo!?'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Yes i am'}
            ],
            dialogs: [
                {id: v1(), name: 'Evhen'},
                {id: v1(), name: 'Lisa'},
                {id: v1(), name: 'Bogdan'},
                {id: v1(), name: 'Sonia'},
                {id: v1(), name: 'Ivan'},
                {id: v1(), name: 'Sasha'}
            ],
        }
    },
    _callSubscriber()  {
        console.log('State changed')
    },
    addPost() {
        const newPost: PostsType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    }

}
