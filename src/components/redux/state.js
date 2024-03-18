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
    _callSubscriber()  {
        console.log("start")
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.contentPage.newPostText,
            likes: 0,
        }
        this._state.contentPage.postsArray.push(newPost);
        this._state.contentPage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.contentPage.newPostText = newText;
        this._callSubscriber(this._state);
    }
}

/*let state = {
    contentPage: {
        postsArray: [
            {id: 1, message: "New gallery", likes: 30},
            {id: 2, message: "It is my new post", likes: 12}
        ],
        newPostText: "lalala"
    }
}*/

/*export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.contentPage.newPostText,
        likes: 0,
    }
    state.contentPage.postsArray.push(newPost);
    state.contentPage.newPostText = '';
    rerenderEntireTree(state);
}*/

/*export let updateNewPostText = (newText) => {
    state.contentPage.newPostText = newText;
    rerenderEntireTree(state);
}*/

/*export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}*/

//export default state
