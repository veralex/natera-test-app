import { UPDATE, UPDATE_ALL } from './action_types';

export const notificationActions = dispatch => ({
    hideNotification: id =>
        dispatch({ type: UPDATE, payload: { id, values: { show: false } } }),
    showAllNotifications: value =>
        dispatch({ type: UPDATE_ALL, payload: value }),
});
