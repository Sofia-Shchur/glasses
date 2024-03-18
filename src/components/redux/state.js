let rerenderEntireTree = () => {
    console.log("start")
}

export let store = {
    state: {
        contentPage: {
            postsArray: [
                {id: 1, message: "New gallery", likes: 30},
                {id: 2, message: "It is my new post", likes: 12}
            ],
            newPostText: "lalala"
        }
    },
    subscribe(observer) {
        rerenderEntireTree = observer;
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this.state.contentPage.newPostText,
            likes: 0,
        }
        this.state.contentPage.postsArray.push(newPost);
        this.state.contentPage.newPostText = '';
        rerenderEntireTree(this.state);
    },
    updateNewPostText(newText) {
        this.state.contentPage.newPostText = newText;
        rerenderEntireTree(this.state);
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
