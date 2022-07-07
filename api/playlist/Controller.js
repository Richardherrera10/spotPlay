// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class PlaylistController {
  constructor (servicesPlaylist, playlist, songPlaylist) {
    this._service = servicesPlaylist
    this._entity = playlist
    this._entitySongPl = songPlaylist
  }

  getAllPlaylist () {
    const response = this._service.all('playlist')
    return response
  }

  createNewPlaylist (playlist) {
    console.log('ctrl playlist dada', playlist)
    const newPlaylist = new this._entity(playlist)
    console.log('entidad playlist', newPlaylist)
    const response = this._service.save('playlist', newPlaylist)
    return response
  }

  updatePlaylist (playlist) {
    const updatedPlaylist = new this._entity(playlist)
    updatedPlaylist._id = playlist.id
    console.log('ctrl', updatedPlaylist)
    const response = this._service.update('playlist', updatedPlaylist)
    return response
  }

  deletePlaylist (playlist) {
    const playlistToDelete = new this._entity(playlist)
    playlistToDelete._id = playlist.id
    console.log('ctrl', playlistToDelete)
    const response = this._service.delete('playlist', playlistToDelete)
    return response
  }

  createNewSongPlaylist (songPlaylist) {
    console.log('ctrl dato dado', songPlaylist)
    const newSongPlaylist = new this._entitySongPl(songPlaylist)
    newSongPlaylist._idPlaylist = songPlaylist.idPlaylist
    newSongPlaylist._idSong = songPlaylist.idSong
    console.log('entidad', newSongPlaylist)
    const response = this._service.save('songPlaylist', newSongPlaylist)
    return response
  }

  deleteSongPlaylist (songPlaylist) {
    console.log('ctrl dato dado', songPlaylist)
    const newSongPlaylist = new this._entitySongPl(songPlaylist)
    newSongPlaylist._idPlaylist = songPlaylist.idPlaylist
    newSongPlaylist._idSong = songPlaylist.idSong
    console.log('entidad', newSongPlaylist)
    const response = this._service.delete('songPlaylist', newSongPlaylist)
    return response
  }
}

export default PlaylistController
