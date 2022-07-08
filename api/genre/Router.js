class GenreRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  async registerRoutes () {
    this._router.get('/', await this.handleGetGenre.bind(this))
    this._router.post('/', await this.handlePostGenre.bind(this))
    this._router.delete('/', await this.hanldeDeleteGenre.bind(this))
    this._router.put('/', await this.hanldeUpdateGenre.bind(this))
  }

  async handleGetGenre (req, res) {
    const result = await this._ctrl.getAllGenre()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePostGenre (req, res) {
    const genre = req.body
    const result = await this._ctrl.createGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async hanldeDeleteGenre (req, res) {
    const genre = req.body
    const result = await this._ctrl.deleteGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async hanldeUpdateGenre (req, res) {
    const genre = req.body
    const result = await this._ctrl.updateGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default GenreRouter
