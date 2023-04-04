# FLATDANGO

## Introduction 
The app allows the user to see the list of movies,see the details of the movie when clicked and buy a ticket to the movie.

## Description
The code listens for the DOMContentLoaded event to fire before executing any code. It then proceeds to call two functions: getFilm() and getFilms(), to fetch data about a single movie and a list of all movies, respectively, from a server.

The renderFilm1() function takes the data of a single movie and updates the corresponding HTML elements with the relevant information such as the movie's poster, title, runtime, showtime, and available tickets. The renderFilms() function is responsible for rendering the list of all the movies on the page by creating an HTML list item for each movie and appending it to the unordered list with an ID of #films.

The buyTicket() function is triggered when a user clicks on the "Buy Ticket" button. It checks if there are available tickets for the movie and decrements the number of tickets if there are. If there are no tickets left, it displays an alert message to the user indicating that there are no tickets left.

Overall, this code provides a basic foundation for a movie ticket booking application, with features such as displaying movie information, rendering a list of movies, and buying tickets. However, it does not include any persistence or user authentication mechanisms.
