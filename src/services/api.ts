export async function getMedalsList() {
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/medals')
        .then((response) => {
            return response.json();
        })
        .catch(err => {
            console.error('Error fetching medals:', err);
            throw err;
        });
}