// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class SongPlaylistController {
  constructor (servicesSongPlaylist, songPlaylist) {
    this._service = servicesSongPlaylist
    this._entity = songPlaylist
  }

  async createNewSongPlaylist (songPlaylist) {
    console.log('ctrl dato dado', songPlaylist)
    const newSongPlaylist = new this._entity(songPlaylist)
    newSongPlaylist._idPlaylist = songPlaylist.idPlaylist
    newSongPlaylist._idSong = songPlaylist.idSong
    console.log('entidad', newSongPlaylist)
    const response = await this._service.save('songPlaylist', newSongPlaylist)
    return response
  }

  async deleteSongPlaylist (songPlaylist) {
    console.log('ctrl dato dado', songPlaylist)
    const newSongPlaylist = new this._entity(songPlaylist)
    newSongPlaylist._idPlaylist = songPlaylist.idPlaylist
    newSongPlaylist._idSong = songPlaylist.idSong
    newSongPlaylist._id = songPlaylist.id
    console.log('entidad', newSongPlaylist)
    const response = await this._service.delete('songPlaylist', newSongPlaylist._id)
    return response
  }
}

export default SongPlaylistController
