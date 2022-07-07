export class Playlist {
  constructor (playlist) {
    this._id = null
    this._title = playlist.title
    this._cover = playlist.cover
    this._description = playlist.description
    this._idUsuario = playlist.idUsuario
  }
}
export class SongPlaylist {
  constructor (songPlaylist) {
    this._id = null
    this._idPlaylist = songPlaylist._idPlaylist
    this._idSong = songPlaylist._idSong
  }
}
