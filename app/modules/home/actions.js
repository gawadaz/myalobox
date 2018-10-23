import * as t from './actionTypes';
import * as api from './api';

// Get Categories - READ (R)
export function getCategories(errorCB) {
    return (dispatch) => {
        dispatch({ type: t.LOADING_CATEGORIES });
        api.getCategories((success, data, error) => {
            if (success) dispatch({ type: t.CATEGORIES_AVAILABLE, data });
            else if (error) errorCB(error);
        });
    };
}
