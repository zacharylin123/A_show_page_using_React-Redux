import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // console.log("about to fetch post");
    await dispatch(fetchPosts());
    console.log(getState());
    const userIds = [];
    getState().posts.forEach(post => {
        if (!userIds.includes(post.userId)) {
            userIds.push(post.userId);
        }
    });
    // console.log(userIds);
    // console.log("fetched posts");
    userIds.forEach(id => dispatch(fetchUser(id)));
    console.log(getState());
};

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const selectPost = () => {
    return {
        type: "SELECT_POST"
    };
};

export const fetchUser = id => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = id => (dispatch, getState) => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
// })
