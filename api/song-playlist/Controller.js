// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class SongPlaylistController {
  constructor (servicesSong, songPlaylist) {
    this._service = servicesSong
    this._entity = songPlaylist
  }

  // song

  getAllSongPlaylist () {
    const response = this._service.all('songPlaylist')
    return response
  }

  createNewSongPlaylist (songPlaylist) {
    const newSongPlaylist = new this._entity(songPlaylist)
    const response = this._service.save('songPlaylist', newSongPlaylist)
    return response
  }

  updateSongPlaylist (songPlaylist) {
    const response = this._service.update('songPlaylist', songPlaylist)
    return response
  }

  deleteSongPlaylist (id) {
    const response = this._service.delete('songPlaylist', id)
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

  deleteGenre (id) {
    const response = this._service.delete('genre', id)
    return response
  }

  updateGenre (genre) {
    const response = this._service.update('genre', genre)
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

  deleteAlbum (id) {
    const response = this._service.delete('album', id)
    return response
  }

  updateAlbum (album) {
    const response = this._service.update('album', album)
    return response
  }
}

export default SongPlaylistController
