import { CREATE, UPDATE, DELETE } from './action_types';

export const postActions = dispatch => ({
    createPost: item =>
        dispatch({
            type: CREATE,
            payload: [item],
        }),
    publishPost: id =>
        dispatch({
            type: UPDATE,
            payload: { id, values: { published: true } },
        }),
    unpublishPost: id =>
        dispatch({
            type: UPDATE,
            payload: { id, values: { published: false } },
        }),
    removePost: id => dispatch({ type: DELETE, payload: { id } }),
});
