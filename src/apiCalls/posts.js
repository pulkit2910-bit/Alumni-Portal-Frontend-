import axios from "axios";

// posts api call
const userFeed = async (userID, dispatch) => {
    dispatch({ type : "FEED_REQUEST_START" });
    try {
        const res = await axios.get(`/posts/feed/${userID}`);
        res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
        dispatch({ type : "FEED_REQUEST_SUCCESS", payload : res.data });
    } catch(err) {
        dispatch({ type : "FEED_REQUEST_ERROR", payload : err });
    }
}

const createPost = async (prvPosts, postDetails, dispatch) => {
    dispatch({ type : "UPDATE_FEED_START" });
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const post = await axios.post("/posts", postDetails, config);
        // console.log(post);
        dispatch({ type : "UPDATE_FEED_SUCCESS", payload : [post.data, ...prvPosts] })
    } catch (err) {
        dispatch({ type : "UPDATE_FEED_ERROR", payload : err })
        console.log(err);
    }
}

const deletePost = async (prvPosts, postID, dispatch) => {
    dispatch({ type : "DELETE_POST_START" });
    try {
        await axios.delete(`/posts/${postID}`);
        dispatch({ type : "DELETE_POST_SUCCESS", payload : prvPosts.filter((p) => p._id !== postID) })
    } catch (err) {
        dispatch({ type : "DELETE_POST_ERROR", payload : err })
        console.log(err);
    }
}

export { userFeed, createPost, deletePost };