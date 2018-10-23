import * as t from './actionTypes';

const initialState = {
    isLoading: false,
    categories: []
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.LOADING_CATEGORIES: {
            const categories = state.categories;

            //show loading signal
            if (categories.length === 0) return { ...state, isLoading: true };

            return state;
        }

        case t.CATEGORIES_AVAILABLE: {
            const { data } = action;
            const categories = [];

            //convert the snapshot (json object) to array
            data.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                item.key = childSnapshot.key;

                categories.push(item);
            });

            categories.reverse();

            return { ...state, categories, isLoading: false };
        }

        case t.LOGGED_OUT: {
            return { ...state, categories: [] };
        }

        default:
            return state;
    }
};

export default homeReducer;
