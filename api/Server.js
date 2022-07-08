// configuracion del servidor

import express from 'express'
import { songModule } from './song/index.js'
import { playlistModule } from './playlist/index.js'
import { userModule } from './users/index.js'
import { artistModule } from './artist/index.js'
import { genreModule } from './genre/index.js'
import { albumModule } from './album/index.js'
import { authModule } from './auth/index.js'
import { roleModule } from './role/index.js'
import { songplaylistModule } from './songPlaylist/index.js'
import cors from 'cors'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'

// configuracion paths
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

class Server {
  constructor (config) {
    this._app = express()
    this._port = config.port
    this._hostname = config.hostname
    this._name = config.name
    // configurar paths
    this._dirname = dirname(fileURLToPath(import.meta.url)) // almacena el directorio del servidor
    this._swaggerFile = YAML.load(join(dirname(fileURLToPath(import.meta.url)), '../docs/swagger.yaml'))
    this.setMiddlewares()
    this.setRoutes()
  }

  // middleware para que el servidor pueda entender el json
  setMiddlewares () {
    this._app.use(express.json())
    this._app.use(express.urlencoded({ extended: true }))
    this._app.use(cors())
    this._app.use(morgan('dev'))
  }
  // configurar rutas raiz con .use

  setRoutes () {
    this._app.use('/api/v1/song', songModule())
    this._app.use('/api/v1/genre', genreModule())
    this._app.use('/api/v1/album', albumModule())
    this._app.use('/api/v1/playlist', playlistModule())
    this._app.use('/api/v1/user', userModule(express.Router))
    this._app.use('/api/v1/artist', artistModule())
    this._app.use('/api/v1/songPlaylist/', songplaylistModule())
    this._app.use('/api/v1/role/', roleModule())
    // recibe query string
    // this._app.use('/api/v1/search')
    this._app.use('/api/v1/auth', authModule(express.Router))
    this._app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(this._swaggerFile))
  }

  // metodo iniciar servidor
  start () {
    this._app.set('hostname', this._hostname)
    this._app.listen(this._port, () => {
      console.log(`${this._name} is running on http://${this._hostname}:${this._port}`)
    })
  }
}

export default Server
