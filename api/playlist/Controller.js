// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class PlaylistController {
  constructor (servicesPlaylist, playlist, songPlaylist) {
    this._service = servicesPlaylist
    this._entity = playlist
    this._entitySongPl = songPlaylist
  }

  async getAllPlaylist () {
    const response = await this._service.all('playlist')
    return response
  }

  async createNewPlaylist (playlist) {
    console.log('ctrl playlist dada', playlist)
    const newPlaylist = new this._entity(playlist)
    console.log('entidad playlist', newPlaylist)
    const response = await this._service.save('playlist', newPlaylist)
    return response
  }

  async updatePlaylist (playlist) {
    const updatedPlaylist = new this._entity(playlist)
    updatedPlaylist._id = playlist.id
    console.log('ctrl', updatedPlaylist)
    const response = await this._service.update('playlist', updatedPlaylist._id, updatedPlaylist)
    return response
  }

  async deletePlaylist (playlist) {
    const playlistToDelete = new this._entity(playlist)
    playlistToDelete._id = playlist.id
    const response = await this._service.delete('playlist', playlistToDelete)
    return response
  }
}

export default PlaylistController
