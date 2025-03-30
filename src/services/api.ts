export async function getMedalsList() {
    return fetch('http://localhost:4000/medals')
        .then((response) => {
            return response.json();
        })
        .catch(err => {
            console.error('Error fetching medals:', err);
            throw err;
        });
}