class ArtistRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetArtist.bind(this))
    this._router.post('/', this.handlePostArtist.bind(this))
    this._router.delete('/', this.hanldeDeleteArtist.bind(this))
    this._router.put('/', this.hanldeUpdateArtist.bind(this))
  }

  handleGetArtist (req, res) {
    const result = this._ctrl.getAllArtist()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostArtist (req, res) {
    const artist = req.body
    const result = this._ctrl.createArtist(artist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  hanldeDeleteArtist (req, res) {
    const artist = req.body
    const result = this._ctrl.deleteArtist(artist)
    this._response.success(req, res, result, this._httpCode.created)
  }

  hanldeUpdateArtist (req, res) {
    const artist = req.body
    const result = this._ctrl.updateArtist(artist)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default ArtistRouter
