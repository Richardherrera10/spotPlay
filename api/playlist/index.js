// empaquetar lo que vayamos a crear
import PlaylistRouter from './Router.js'
import express from 'express'
import PlaylistController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { Playlist } from '../../entity/Playlist.js'
import DbMongo from '../../store/DBMongo.js'

export const playlistModule = () => {
  const servicesPlaylist = new DbMongo()
  const playlistController = new PlaylistController(servicesPlaylist, Playlist)
  const playlistRouter = new PlaylistRouter(express.Router, playlistController, response, HttpCode)
  return playlistRouter._router
}
