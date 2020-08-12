import { useReducer } from 'react';
import reducer from './reducer';
import { CREATE, DELETE } from './actions';
import data from '../../assets/data.json';

export default () => {
    const [state, dispatch] = useReducer(reducer, data.projects);

    const dispatcher = {
        createProject: item => dispatch({ type: CREATE, payload: [item] }),
        removeProject: id => dispatch({ type: DELETE, payload: { id } }),
    };

    return { projects: state, ...dispatcher };
};
