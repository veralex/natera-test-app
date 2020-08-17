import { CREATE, DELETE } from './action_types';

export const projectActions = dispatch => ({
    createProject: item => dispatch({ type: CREATE, payload: [item] }),
    removeProject: id => dispatch({ type: DELETE, payload: { id } }),
});
