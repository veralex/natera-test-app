import { CREATE, UPDATE, DELETE } from './actions';

export default (state, action) => {
    switch (action.type) {
        case CREATE:
            // Just in case if we need to create a batch of posts
            return [...state, ...action.payload];
        case UPDATE:
            // I use map and filter here because we don't have many posts.
            // Slice is preferrable in real-life apps
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, ...action.payload.values }
                    : item
            );
        case DELETE:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};
