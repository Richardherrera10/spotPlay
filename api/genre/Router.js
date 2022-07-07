class GenreRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  registerRoutes () {
    this._router.get('/', this.handleGetGenre.bind(this))
    this._router.post('/', this.handlePostGenre.bind(this))
    this._router.delete('/', this.hanldeDeleteGenre.bind(this))
    this._router.put('/', this.hanldeUpdateGenre.bind(this))
  }

  handleGetGenre (req, res) {
    const result = this._ctrl.getAllGenre()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  handlePostGenre (req, res) {
    const genre = req.body
    const result = this._ctrl.createGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }

  hanldeDeleteGenre (req, res) {
    const genre = req.body
    const result = this._ctrl.deleteGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }

  hanldeUpdateGenre (req, res) {
    const genre = req.body
    const result = this._ctrl.updateGenre(genre)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default GenreRouter
