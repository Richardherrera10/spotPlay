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

  async getAllSong () {
    const response = await this._service.all('song')
    return response
  }

  async createNewSong (song) {
    const newSong = new this._entity(song)
    console.log('ctrl', newSong)
    const response = await this._service.save('song', newSong)
    return response
  }

  updateSong (song) {
    const updatedSong = new this._entity(song)
    updatedSong._id = song.id
    const response = this._service.update('song', updatedSong._id, updatedSong)
    return response
  }

  async deleteSong (song) {
    const songToDelete = new this._entity(song)
    songToDelete._id = song.id
    const response = await this._service.delete('song', songToDelete._id)
    return response
  }
}

export default SongController
