class SongRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetSong.bind(this))
    this._router.post('/', this.handlePostSong.bind(this))
    this._router.delete('/', this.handleDeleteSong.bind(this))
    this._router.put('/', this.handleUpdateSong.bind(this))

    this._router.get('/genre', this.handleGetGenre.bind(this))
    this._router.post('/genre', this.handlePostGenre.bind(this))
    this._router.delete('/genre', this.handleDeleteGenre.bind(this))
    this._router.put('/genre', this.handleUpdateGenre.bind(this))

    this._router.get('/album', this.handleGetAlbum.bind(this))
    this._router.post('/album', this.handlePostAlbum.bind(this))
    this._router.delete('/album', this.handleDeleteAlbum.bind(this))
    this._router.put('/album', this.handleUpdateAlbum.bind(this))
  }

  // song

  handleGetSong (req, res) {
    const result = this._ctrl.getAllSong()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostSong (req, res) {
    const song = req.body
    console.log('router', song)
    const result = this._ctrl.createNewSong(song)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleDeleteSong (req, res) {
    const song = req.body
    console.log('rtr', song)
    const result = this._ctrl.deleteSong(song)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleUpdateSong (req, res) {
    const song = req.body
    console.log('rtr', song)
    const result = this._ctrl.updateSong(song)
    this._response.success(req, res, result, this._httpCode.created)
  }

  // genre

  handleGetGenre (req, res) {
    const result = this._ctrl.getAllGenre()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostGenre (req, res) {
    const genre = req.body
    const result = this._ctrl.createNewGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleDeleteGenre (req, res) {
    const genre = req.body
    const result = this._ctrl.deleteGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleUpdateGenre (req, res) {
    const genre = req.body
    const result = this._ctrl.updateGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }

  // album

  handleGetAlbum (req, res) {
    const result = this._ctrl.getAllAlbum()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostAlbum (req, res) {
    const album = req.body
    const result = this._ctrl.createNewAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleDeleteAlbum (req, res) {
    const album = req.body
    const result = this._ctrl.deleteAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }

  handleUpdateAlbum (req, res) {
    const album = req.body
    const result = this._ctrl.updateAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default SongRouter
