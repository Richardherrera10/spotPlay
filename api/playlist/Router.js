class PlaylistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  async registerRoutes () {
    this._router.get('/', await this.handleGetPlaylist.bind(this))
    this._router.post('/', await this.handlePostPlaylist.bind(this))
    this._router.delete('/', await this.handleDeletePlaylist.bind(this))
    this._router.put('/', await this.handleUpdatePlaylist.bind(this))
  }

  async handleGetPlaylist (req, res) {
    const result = await this._ctrl.getAllPlaylist()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePostPlaylist (req, res) {
    const playlist = req.body
    const result = await this._ctrl.createNewPlaylist(playlist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async handleDeletePlaylist (req, res) {
    const playlist = req.body
    const result = await this._ctrl.deletePlaylist(playlist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async handleUpdatePlaylist (req, res) {
    const playlist = req.body
    const result = await this._ctrl.updatePlaylist(playlist)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default PlaylistRouter
