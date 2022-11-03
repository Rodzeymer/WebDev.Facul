

async function getAllStarWarsMovies() {
    import axios from 'axios';
    try {
        const {data} =await axios.get('https://swapi.dev/api/films')
        console.log(data);
    } catch (error) {
        console.log(error.response)
    }
}

    var movies= document.querySelector('#movies')
    var ul = document.createElement('ul')
    movies.append(ul)
    var li = document.createElement('li')
    ul.append(li)