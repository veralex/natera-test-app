import { CREATE, UPDATE, UPDATE_ALL, DELETE } from './actions';
import ObjectID from 'bson-objectid';

export const reducer = (state, action) => {
    switch (action.type) {
        case CREATE:
            // IMPORTANT! Modifying payload in reducer is not acceptable!
            // But since it's demo I did it
            // eslint-disable-next-line no-case-declarations
            const data = action.payload.map(item => {
                if (!item.id) {
                    item.id = new ObjectID().toString();
                }
                return item;
            });
            // Just in case if we need to create a batch of posts
            return [...state, ...data];
        case UPDATE:
            // I use map and filter here because we don't have many posts.
            // Slice is preferrable in real-life apps
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, ...action.payload.values }
                    : item
            );
        case UPDATE_ALL:
            return state.map(item => ({ ...item, ...action.payload }));
        case DELETE:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};
