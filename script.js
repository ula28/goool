// переведет строку в число(+)
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// база данных
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
//  переменные с ответами
const a = prompt("Один из последних просмотренных фильмов?"),
  		b = prompt("На сколько оцените его?"),
	   c = prompt("Один из последних просмотренных фильмов?"),
      d = prompt("На сколько оцените его?");
//  обратимся к базе данных, внутри которой находится обьект movies, чтобы записать ответы в этот обьект в формате ключ-значение
// записываем свойство в обьект, сипользуем квадратные скобки
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);