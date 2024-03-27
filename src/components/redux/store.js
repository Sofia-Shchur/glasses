import {contentReducer} from "./contentReducer";
import {sidebarReducer} from "./sidebarReducer";

export let store = {
    _state: {
        contentPage: {
            postsArray: [
                {id: 1, message: "New gallery", likes: 30},
                {id: 2, message: "It is my new post", likes: 12}
            ],
            newPostText: "lalala"
        },
        sidebar: {

        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("start")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.contentPage = contentReducer(this._state.contentPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}


