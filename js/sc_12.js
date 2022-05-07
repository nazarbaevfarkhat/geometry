// 1 tasks
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let film = +prompt('Один из последних просмотренных фильмов?', '');
let ball = prompt('На сколько вы его оцениваете?','');
personalMovieDB.movies[film] = ball;
film = prompt('Один из последних просмотренных фильмов?', '');
ball = prompt('На сколько вы его оцениваете?','');
personalMovieDB.movies[film] = ball;
console.log(personalMovieDB.movies);
