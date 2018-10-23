import { database } from '../../config/firebase';

export function getCategories(callback) {
    const categoriesRef = database.ref('categories');

    //start listening for new data
    categoriesRef.on('value', (snapshot) => {
        callback(true, snapshot, null);
    });
}
