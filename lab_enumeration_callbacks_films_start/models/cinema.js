const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitle = function() {
  const filmTitleArray = this.films.map((film) => {
    return film.title
  });
  return filmTitleArray
};

Cinema.prototype.findFilmByTitle = function (filmToFind) {
  const foundFilm = this.films.find((currentFilm) => {
    return currentFilm.title === filmToFind
  });
  return foundFilm
};

Cinema.prototype.findFilmsByGenre = function (genre) {
  const filmArray = this.films.filter((currentFilm) => {
    return currentFilm.genre === genre
  });
  return filmArray
};

Cinema.prototype.filmOfYear = function (year) {
  const filmexists = this.films.some((currentFilm) => {
    return currentFilm.year === year
  });
  return filmexists

};


Cinema.prototype.allFilmsOverLength = function (length) {
  const filmsOverLength = this.films.every((currentFilm) => {
    return currentFilm.length > length

  });
  return filmsOverLength
  };


Cinema.prototype.totalRunningTime = function () {
  const total = this.films.reduce((runningTotal,currentFilm) => {
    return runningTotal + currentFilm.length
  },0);
  return total
};

Cinema.prototype.filmsByProperty = function (property, value){
  const foundFilms = this.films.filter((currentFilm) => {
    return currentFilm[property] === value
  });
  return foundFilms
};

module.exports = Cinema;
