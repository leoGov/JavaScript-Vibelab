const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function askMoviesSecondWay() {
    let i = 0;

    while (i < 2) {
        let lastWatchedMovie,
            movieRating;

        do {
            lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
        } while (lastWatchedMovie == '' || lastWatchedMovie == null || lastWatchedMovie.length > 50);

        do {
            movieRating = prompt('На сколько оцените его?', '');
        } while (movieRating == '' || movieRating == null);

        personalMovieDB.movies[lastWatchedMovie] = movieRating;
        i++;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
