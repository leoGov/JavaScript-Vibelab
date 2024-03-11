const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        for (let i = 0; i < 2; i++) {
            let lastWatchedMovie,
                movieRating;

            do {
                lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
            } while (lastWatchedMovie === '' || lastWatchedMovie === null || lastWatchedMovie.length > 50);

            do {
                movieRating = prompt('На сколько оцените его?', '');
            } while (movieRating === '' || movieRating === null);

            this.movies[lastWatchedMovie] = movieRating;
        }

        this.analyzeMovies();
    },
    analyzeMovies: function() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            console.log('Вы обычный зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function() {
        if (!this.privat) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let favoriteGenre;
            do {
                favoriteGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            } while (favoriteGenre === '' || favoriteGenre === null);
            this.genres.push(favoriteGenre);
        }
        this.genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`);
        });
    }
};

document.getElementById('startBtn').addEventListener('click', function() {
    personalMovieDB.start();
});

document.getElementById('toggleDBBtn').addEventListener('click', function() {
    personalMovieDB.toggleVisibleMyDB();
    personalMovieDB.showMyDB();
});

document.getElementById('showGenresBtn').addEventListener('click', function() {
    personalMovieDB.writeYourGenres();
});