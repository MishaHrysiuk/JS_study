const numberOfFilms = +prompt("How much did you watched films?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt("One of the last films?", ''),
    rateFilm1 = +prompt("Rate a film", '');

const lastFilm2 = prompt("One of the last films?", ''),
    rateFilm2 = +prompt("Rate a film", '');

personalMovieDB.movies[lastFilm1] = rateFilm1;
personalMovieDB.movies[lastFilm2] = rateFilm2;

console.log(personalMovieDB);




