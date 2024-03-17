class PersonalMovieDB {
    constructor() {
        this.count = 0;
        this.movies = {};
        this.actors = {};
        this.genres = [];
        this.privat = false;
    }

    start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        for (let i = 0; i < 2; i++) {
            this.addMovie();
        }

        this.analyzeMovies();
    }

    analyzeMovies() {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            console.log('Вы обычный зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    }

    showMyDB() {
        if (!this.privat) {
            console.log(this);
        }
    }

    toggleVisibleMyDB() {
        this.privat = !this.privat;
    }

    writeYourGenres(...genres) {
        const genreList = document.createElement('ul');
        genreList.classList.add('genre-list'); // Добавляем класс
        document.body.appendChild(genreList); // Добавляем список в тело документа
        genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`);
            const listItem = document.createElement('li');
            listItem.textContent = genre;
            genreList.appendChild(listItem);
        });
    }

    addMovie() {
        let lastWatchedMovie,
            movieRating,
            isFavorite;

        do {
            lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', '');
        } while (lastWatchedMovie === '' || lastWatchedMovie === null || lastWatchedMovie.length > 50);

        do {
            movieRating = prompt('На сколько оцените его?', '');
        } while (movieRating === '' || movieRating === null);

        isFavorite = confirm('Сделать фильм любимым?');

        if (lastWatchedMovie.length > 21) {
            lastWatchedMovie = lastWatchedMovie.slice(0, 21) + '...';
        }

        this.movies[lastWatchedMovie] = {
            rating: movieRating,
            favorite: isFavorite
        };

        console.log(isFavorite ? 'Добавляем любимый фильм' : 'Фильм добавлен');
    }

    deleteMovie(movieName) {
        if (this.movies.hasOwnProperty(movieName)) {
            delete this.movies[movieName];
            console.log(`Фильм "${movieName}" удален из списка`);
        } else {
            console.log(`Фильма "${movieName}" нет в списке`);
        }
    }

    sortMovies() {
        this.movies = Object.fromEntries(
            Object.entries(this.movies).sort((a, b) => a[0].localeCompare(b[0]))
        );
    }
}

const personalMovieDB = new PersonalMovieDB();

personalMovieDB.start();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres('Драма', 'Комедия', 'Фантастика');

// Добавление нового фильма
const addMovieBtn = document.getElementById('addMovieBtn');

addMovieBtn.addEventListener('click', function() {
    personalMovieDB.addMovie();
    personalMovieDB.showMyDB();
});

// Удаление фильма
const deleteMovieBtn = document.getElementById('deleteMovieBtn');

deleteMovieBtn.addEventListener('click', function() {
    const movieName = prompt('Введите название фильма для удаления: ');
    personalMovieDB.deleteMovie(movieName);
    personalMovieDB.showMyDB();
});

// Сортировка фильмов
const sortMoviesBtn = document.getElementById('sortMoviesBtn');

sortMoviesBtn.addEventListener('click', function() {
    personalMovieDB.sortMovies();
    personalMovieDB.showMyDB();
});
