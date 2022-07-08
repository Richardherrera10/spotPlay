// empaquetar lo que vayamos a crear
import SongPlaylistRouter from './Router.js'
import express from 'express'
import SongPlaylistController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { SongPlaylist } from '../../entity/SongPlaylist.js'
import DbMongo from '../../store/DBMongo.js'

export const songplaylistModule = () => {
  const servicesSongPlaylist = new DbMongo()
  const songPlaylistController = new SongPlaylistController(servicesSongPlaylist, SongPlaylist)
  const songPlaylistRouter = new SongPlaylistRouter(express.Router, songPlaylistController, response, HttpCode)
  return songPlaylistRouter._router
}
