// DOM content loaded
document.addEventListener('DOMContentLoaded',()=>{
    getFilms('http://localhost:3000/films')
    buyTicket()
})

//Get movies from the db
let filmsArray = []
let filmDispaly
const getFilms=async(url)=>{
    const response = await fetch(url);
    filmsArray = await response.json();
    filmDispaly = filmsArray[0];
    renderFilms();
    renderFilmsMenu();
}
// 