import { UPDATE } from './action_types';

export const notificationActions = dispatch => ({
    hideNotification: id =>
        dispatch({ type: UPDATE, payload: { id, values: { show: false } } }),
    showNotification: id =>
        dispatch({ type: UPDATE, payload: { id, values: { show: true } } }),
});
