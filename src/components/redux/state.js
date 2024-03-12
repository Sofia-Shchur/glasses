import {rerenderEntireTree} from "../../render";

let state = {
    contentPage: {
        postsArray: [
            {id: 1, message: "New gallery", likes: 30},
            {id: 2, message: "It is my new post", likes: 12}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likes: 0,
    }

    state.contentPage.postsArray.push(newPost);
    rerenderEntireTree(state);
}

export default state
