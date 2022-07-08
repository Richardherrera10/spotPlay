class RoleRouter {
  constructor (router, controller, response, httpCode) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this.registerRoutes()
  }

  async registerRoutes () {
    this._router.get('/', await this.handleGetRole.bind(this))
    this._router.post('/', await this.handlePostRole.bind(this))
    this._router.delete('/', await this.hanldeDeleteRole.bind(this))
    this._router.put('/', await this.hanldeUpdateRole.bind(this))
  }

  async handleGetRole (req, res) {
    const result = await this._ctrl.getAllRole()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePostRole (req, res) {
    const album = req.body
    const result = await this._ctrl.createRole(album)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async hanldeDeleteRole (req, res) {
    const album = req.body
    const result = await this._ctrl.deleteRole(album)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async hanldeUpdateRole (req, res) {
    const album = req.body
    const result = await this._ctrl.updateRole(album)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default RoleRouter
