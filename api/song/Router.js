class SongRouter {
  constructor (router, controller, response, httpCode, checkToken) {
    this._router = router() // instancia del enrutador de express
    this._ctrl = controller // instancia de controlador
    this._response = response
    this._httpCode = httpCode
    this._checkToken = checkToken
    this.registerRoutes()
  }

  async registerRoutes () {
    this._router.get('/', this._checkToken, await this.handleGetSong.bind(this))
    this._router.post('/', this._checkToken, await this.handlePostSong.bind(this))
    this._router.delete('/', await this.handleDeleteSong.bind(this))
    this._router.put('/', await this.handleUpdateSong.bind(this))
  }

  // song

  async handleGetSong (req, res) {
    /*     // verificar si me mandan querys
    if (Object.keys(req.query).length > 0) {
      console.log(req.query)
      console.log('hay query')
    } else {
      console.log('no hay query')
    }

    // const q1 = req.query.name
    // const q2 = req.query.id
    // console.log(q1)
    // console.log(q2)
    res.json({ mensaje: 'hello world' }) */

    const result = await this._ctrl.getAllSong()
    this._response.success(req, res, result, this._httpCode.ok)
  }

  async handlePostSong (req, res) {
    const song = req.body
    const result = await this._ctrl.createNewSong(song)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async handleDeleteSong (req, res) {
    const song = req.body
    console.log('rtr', song)
    const result = await this._ctrl.deleteSong(song)
    this._response.success(req, res, result, this._httpCode.created)
  }

  async handleUpdateSong (req, res) {
    const song = req.body
    const result = await this._ctrl.updateSong(song)
    this._response.success(req, res, result, this._httpCode.created)
  }
}

export default SongRouter
