class ArtistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  async registerRoutes () {
    this._router.get('/', await this.handleGetArtist.bind(this))
    this._router.post('/', await this.handlePostArtist.bind(this))
    this._router.delete('/', await this.hanldeDeleteArtist.bind(this))
    this._router.put('/', await this.hanldeUpdateArtist.bind(this))
  }

  async handleGetArtist (req, res) {
    const result = await this._ctrl.getAllArtist()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePostArtist (req, res) {
    const artist = req.body
    const result = await this._ctrl.createArtist(artist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async hanldeDeleteArtist (req, res) {
    const artist = req.body
    const result = await this._ctrl.deleteArtist(artist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async hanldeUpdateArtist (req, res) {
    const artist = req.body
    const result = await this._ctrl.updateArtist(artist)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default ArtistRouter
