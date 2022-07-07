class AlbumRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetAlbum.bind(this))
    this._router.post('/', this.handlePostAlbum.bind(this))
    this._router.delete('/', this.hanldeDeleteAlbum.bind(this))
    this._router.put('/', this.hanldeUpdateAlbum.bind(this))
  }

  handleGetAlbum (req, res) {
    const result = this._ctrl.getAllAlbum()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostAlbum (req, res) {
    const album = req.body
    const result = this._ctrl.createAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }

  hanldeDeleteAlbum (req, res) {
    const album = req.body
    const result = this._ctrl.deleteAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }

  hanldeUpdateAlbum (req, res) {
    const album = req.body
    const result = this._ctrl.updateAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default AlbumRouter
