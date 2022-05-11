const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How much has you watched films?", '');

        while (!personalMovieDB.count || personalMovieDB.count < 0) {
            personalMovieDB.count = +prompt("How much has you watched films?", '');
        }
    },
    rememberMyFilms: function(numberOfQuestions) {
        let i = 0;
        while (i < numberOfQuestions){
            const lastFilm = prompt("One of the last films?", ''),
            rateFilm = +prompt("Rate the film", '');
            if (lastFilm == null || !lastFilm.trim() || !rateFilm || rateFilm < 0 || rateFilm > 10 || lastFilm.length >= 50) {
                continue;
            }
            personalMovieDB.movies[lastFilm] = rateFilm;
            i++;
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            alert('A fewness watched filmes');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            alert('You are classic viewer');
        } else if (personalMovieDB.count > 30) {
            alert('You are MOVIEGOER!!!');
        } else {
            alert('Something wrong!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    writeYourGenres: function(numberOfGenres) {
        for (let i = 0; i < numberOfGenres; i++){
            personalMovieDB.genres[i] = prompt(`Your favorite ganre of number ${i + 1}`, '');
            if (!personalMovieDB.genres[i] || personalMovieDB.genres[i].trim() == '') {
                i--;
            }
        }
        personalMovieDB.genres.forEach((genre, i) => console.log(`Favourite ganre #${i+1} is '${genre}'\n`));
    }
};

// const numberOfQuestions = 2;
// const numberOfGenres = 3;

// personalMovieDB.rememberMyFilms(numberOfQuestions);

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres(numberOfGenres);

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB.privat);
