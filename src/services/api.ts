import host from '@/constants/url';

export async function getMedalsList() {
    return fetch(host + '/medals')
        .then((response) => {
            return response.json();
        })
        .catch(err => {
            console.error('Error fetching medals:', err);
            throw err;
        });
}