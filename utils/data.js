
export const getData = () => {
    fetch('https://database-babc3.firebaseio.com/movies.json')
        .then((data) => {
            return data.json()
        })
        .then((data) => {
           return data;
        })
        .catch(error => {

            console.error(error)
        });
};

