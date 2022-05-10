let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const numberOfQuestions = 2;
const numberOfGenres = 3;

rememberMyFilms(numberOfQuestions);

detectPersonalLevel();

writeYourGenres(numberOfGenres);

showMyDB(personalMovieDB.privat);

// FUNCTION
function start() {
    numberOfFilms = +prompt("How much did you watched films?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("How much did you watched films?", '');
    }
}

function rememberMyFilms(numberOfQuestions) {
    let i = 0;
    while (i < numberOfQuestions){
        const lastFilm = prompt("One of the last films?", ''),
         rateFilm = +prompt("Rate a film", '');
        if (!lastFilm || lastFilm.length >= 50) {
            continue;
        }
        personalMovieDB.movies[lastFilm] = rateFilm;
        i++;
    }
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert('A fewness watched filmes');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        alert('You are classic viewer');
    } else if (personalMovieDB.count > 30) {
        alert('You are MOVIEGOER!!!');
    } else {
        alert('Something wrong!');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(numberOfGenres) {
    for (let i = 0; i < numberOfGenres; i++){
        personalMovieDB.genres[i] = prompt(`Your favorite ganre of number ${i + 1}`, '');
    }
}