import { useReducer } from 'react';
import reducer from './reducer';
import { CREATE, UPDATE, DELETE } from './actions';
import data from '../../assets/data.json';

export default () => {
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case CREATE:
    //             // Just in case if we need to create a batch of posts
    //             return [...state, ...action.payload];
    //         case UPDATE:
    //             // I use map and filter here because we don't have many posts.
    //             // Slice is preferrable in real-life apps
    //             return state.map(post =>
    //                 post.id === action.payload.id
    //                     ? { ...post, ...action.payload.values }
    //                     : post
    //             );
    //         case DELETE:
    //             return state.filter(post => post.id !== action.payload.id);
    //     }
    // };

    const [state, dispatch] = useReducer(reducer, data.posts);

    const dispatcher = {
        createPost: item =>
            dispatch({
                type: CREATE,
                payload: [
                    {
                        ...item,
                        id: Math.max(...state.map(p => p.id)) + 1,
                        image: item.image?.name,
                    },
                ],
            }),
        publishPost: id =>
            dispatch({
                type: UPDATE,
                payload: { id, values: { published: true } },
            }),
        unpublishPost: id =>
            dispatch({
                type: UPDATE,
                payload: { id: id, values: { published: false } },
            }),
        removePost: id => dispatch({ type: DELETE, payload: { id } }),
    };
    return { posts: state, ...dispatcher };
};
