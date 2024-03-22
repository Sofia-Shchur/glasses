const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export let store = {
    _state: {
        contentPage: {
            postsArray: [
                {id: 1, message: "New gallery", likes: 30},
                {id: 2, message: "It is my new post", likes: 12}
            ],
            newPostText: "lalala"
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.contentPage.newPostText,
                likes: 0,
            }
            this._state.contentPage.postsArray.push(newPost);
            this._state.contentPage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.contentPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

