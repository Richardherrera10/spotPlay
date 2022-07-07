// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class SongController {
  constructor (servicesSongPlaylist, songPlaylist, genre, album) {
    this._service = servicesSongPlaylist
    this._entity = songPlaylist
    this._genre = genre
    this._album = album
  }

  // song

  getAllSong () {
    const response = this._service.all('song')
    return response
  }

  createNewSong (song) {
    const newSong = new this._entity(song)
    console.log('ctrl', newSong)
    const response = this._service.save('song', newSong)
    return response
  }

  updateSong (song) {
    const updatedSong = new this._entity(song)
    updatedSong._id = song.id
    console.log('ctrl', updatedSong)
    const response = this._service.update('song', updatedSong)
    return response
  }

  deleteSong (song) {
  /*     console.log('ctrl', song)
    const result = this._service.findByAttribute('song', '_title', song.title)
    console.log('ctrl result del find by attribute', result)
    if (result != null) {
      const response = this._service.delete('song', result)
      return response
    } else {
      return 'Song does not exist'
    } */
    const songToDelete = new this._entity(song)
    songToDelete._id = song.id
    console.log('ctrl', songToDelete)
    const response = this._service.delete('song', songToDelete)
    return response
  }

  // genre

  getAllGenre () {
    const response = this._service.all('genre')
    return response
  }

  createNewGenre (genre) {
    const newGenre = new this._genre(genre)
    console.log(newGenre)
    const response = this._service.save('genre', newGenre)
    return response
  }

  deleteGenre (genre) {
    const genreToDelete = new this._genre(genre)
    genreToDelete._id = genre.id
    console.log('ctrl', genreToDelete)
    const response = this._service.delete('genre', genreToDelete)
    return response
  }

  updateGenre (genre) {
    const updatedGenre = new this._genre(genre)
    updatedGenre._id = genre.id
    console.log('ctrl', updatedGenre)
    const response = this._service.update('genre', updatedGenre)
    return response
  }

  // album

  getAllAlbum () {
    const response = this._service.all('album')
    return response
  }

  createNewAlbum (album) {
    const newAlbum = new this._album(album)
    console.log(newAlbum)
    const response = this._service.save('album', newAlbum)
    return response
  }

  deleteAlbum (album) {
    const albumToDelete = new this._album(album)
    albumToDelete._id = album.id
    console.log('ctrl', albumToDelete)
    const response = this._service.delete('album', albumToDelete)
    return response
  }

  updateAlbum (album) {
    const updatedAlbum = new this._album(album)
    updatedAlbum._id = album.id
    console.log('ctrl', updatedAlbum)
    const response = this._service.update('album', updatedAlbum)
    return response
  }
}

export default SongController
