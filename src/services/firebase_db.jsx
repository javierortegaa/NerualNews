import {db} from "../configuration.tsx";
import {ref, onValue } from "firebase/database";


export const getData = async () => {
    const collection_ref = ref(db, 'collection');

    return new Promise<any[]>((resolve, reject) => {
    onValue(
        collection_ref,
        (snapshot) => {
        const data = snapshot.val();
        if (data) {
            resolve(Object.values(data)); // Resolve the promise with the data
        } else {
            resolve([]); // Resolve with an empty array if there's no data
        }
        },
        (error) => reject(error) // Handle errors if any
    );
    });
};

