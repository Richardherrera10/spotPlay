// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class GenreController {
  constructor (servicesGenre, genre) {
    this._service = servicesGenre
    this._entity = genre
  }

  getAllGenre () {
    const response = this._service.all('genre')
    return response
  }

  createGenre (genre) {
    const newGenre = new this._entity(genre)
    const response = this._service.save('genre', newGenre)
    return response
  }

  updateGenre (genre) {
    const updatedGenre = new this._entity(genre)
    updatedGenre._id = genre.id
    console.log('ctrl', updatedGenre)
    const response = this._service.update('genre', updatedGenre)
    return response
  }

  deleteGenre (genre) {
    const genreToDelete = new this._entity(genre)
    genreToDelete._id = genre.id
    console.log('ctrl', genreToDelete)
    const response = this._service.delete('genre', genreToDelete)
    return response
  }
}

export default GenreController
