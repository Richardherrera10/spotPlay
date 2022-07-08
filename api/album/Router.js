class AlbumRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  async registerRoutes () {
    this._router.get('/', await this.handleGetAlbum.bind(this))
    this._router.post('/', await this.handlePostAlbum.bind(this))
    this._router.delete('/', await this.hanldeDeleteAlbum.bind(this))
    this._router.put('/', await this.hanldeUpdateAlbum.bind(this))
  }

  async handleGetAlbum (req, res) {
    const result = await this._ctrl.getAllAlbum()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePostAlbum (req, res) {
    const album = req.body
    const result = await this._ctrl.createAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async hanldeDeleteAlbum (req, res) {
    const album = req.body
    const result = await this._ctrl.deleteAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async hanldeUpdateAlbum (req, res) {
    const album = req.body
    const result = await this._ctrl.updateAlbum(album)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default AlbumRouter
