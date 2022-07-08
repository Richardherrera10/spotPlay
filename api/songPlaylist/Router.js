class SongPlaylistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  async registerRoutes () {
    // song - playlist table
    this._router.post('/addSong', await this.handlePostSongPlaylist.bind(this))
    this._router.delete('/deleteSong', await this.handleDeleteSongPlaylist.bind(this))
  }

  async handlePostSongPlaylist (req, res) {
    const SongPlaylist = req.body
    console.log('songplaylist escrita en postman', SongPlaylist)
    const result = await this._ctrl.createNewSongPlaylist(SongPlaylist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async handleDeleteSongPlaylist (req, res) {
    const SongPlaylist = req.body
    const result = await this._ctrl.deleteSongPlaylist(SongPlaylist)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default SongPlaylistRouter
