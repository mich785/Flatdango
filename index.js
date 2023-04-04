// DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  getFilm("http://localhost:3000/films/1");
  getFilms("http://localhost:3000/films");

  const buyButton = document.querySelector("#buy-ticket");
  buyButton.addEventListener("click", buyTicket);
});

//Get the first movie from the db
const getFilm = async (url) => {
  const response = await fetch(url);
  const film = await response.json();
  renderFilm1(film);
};

// Function to render information of the first film


function renderFilm1(film) {
    const filmPoster = document.getElementById("image");
    const filmTitle = document.getElementById("title");
    const filmRuntime = document.getElementById("runtime");
    const showTime = document.getElementById("showtime");
    const availableTickets = document.getElementById("ticket");
  filmPoster.src = film.poster;
  filmTitle.textContent = film.title;
  filmRuntime.textContent = "Runtime :" +film.runtime;
  showTime.textContent = "Showtime:" +film.showtime;
  availableTickets.textContent = "Tickets:"+(film.capacity - film.tickets_sold);
}
// Get list of all the movies form the db
const getFilms = async (url) => {
  const response = await fetch(url);
  const films = await response.json();
  renderFilms(films);
};

// Function to list the movies
function renderFilms(films) {
  const filmList = document.querySelector("#films");
  filmList.innerHTML = "";
  films.forEach((film) => {
    const filmListItem = document.createElement("li");
    filmListItem.innerHTML = film.title;

    filmListItem.addEventListener("click", () => {
      getFilm(`http://localhost:3000/films/${film.id}`);
    });
    filmList.appendChild(filmListItem);
  });
}

// Function to buy ticket
function buyTicket() {
    const availableTickets = document.querySelector('#ticket')
  let currentTickets = parseInt(availableTickets.textContent);
  if (currentTickets > 0) {
    currentTickets--;
     availableTickets.textContent = currentTickets;
  } else {
    alert("Sorry,we are out of tickets");
  }
}
