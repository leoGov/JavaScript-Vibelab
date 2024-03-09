const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let i = 0; i < 2; i++) {
    const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
        movieRating = prompt('На сколько оцените его?', '');

    if (lastWatchedMovie != null && movieRating != null && lastWatchedMovie != '' && movieRating != '' && lastWatchedMovie.length < 50) {
        personalMovieDB.movies[lastWatchedMovie] = movieRating;
    } else {
        alert('Ошибка. Пожалуйста, введите корректные данные.');
        i--;
    }
}

console.log(personalMovieDB);

