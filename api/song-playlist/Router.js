class SongPlaylistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    // agregar cancion a lista, recibir idPlaylist y idSong
    this._router.post('/addsong', this.handlePostSongToPlaylist.bind(this))
    // remover cancion de playlist
    this._router.delete('/deletesong', this.handleDeleteSongFromPlaylist.bind(this))
    // buscar cancion
    this._router.get('/getsongs', this.handleGetSongFromPlaylist.bind(this))
    // actualizar cancion
    this._router.put('/updateSongs', this.handleUpdateSongFromPlaylist.bind(this))
  }

  handleGetSongFromPlaylist (req, res) {
    const result = this._ctrl.getAllSongPlaylist()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostSongToPlaylist (req, res) {
    const songPlaylist = req.body
    const result = this._ctrl.createNewSongPlaylist(songPlaylist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleDeleteSongFromPlaylist (req, res) {
    const songPlaylist = req.body
    const result = this._ctrl.deleteSongPlaylist(songPlaylist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleUpdateSongFromPlaylist (req, res) {
    const songPlaylist = req.body
    const result = this._ctrl.updateSongPlaylist(songPlaylist)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default SongPlaylistRouter
