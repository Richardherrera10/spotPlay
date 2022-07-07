class PlaylistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetPlaylist.bind(this))
    this._router.post('/', this.handlePostPlaylist.bind(this))
    this._router.delete('/', this.handleDeletePlaylist.bind(this))
    this._router.put('/', this.handleUpdatePlaylist.bind(this))

    // song - playlist table
    this._router.post('/addSong', this.handlePostSongPlaylist.bind(this))
    this._router.delete('/deleteSong', this.handleDeleteSongPlaylist.bind(this))
  }

  handleGetPlaylist (req, res) {
    const result = this._ctrl.getAllPlaylist()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostPlaylist (req, res) {
    const playlist = req.body
    const result = this._ctrl.createNewPlaylist(playlist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleDeletePlaylist (req, res) {
    const playlist = req.body
    const result = this._ctrl.deletePlaylist(playlist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleUpdatePlaylist (req, res) {
    const playlist = req.body
    const result = this._ctrl.updatePlaylist(playlist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handlePostSongPlaylist (req, res) {
    const SongPlaylist = req.body
    console.log('songplaylist escrita en postman', SongPlaylist)
    const result = this._ctrl.createNewSongPlaylist(SongPlaylist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleDeleteSongPlaylist (req, res) {
    const SongPlaylist = req.body
    const result = this._ctrl.deleteSongPlaylist(SongPlaylist)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default PlaylistRouter
