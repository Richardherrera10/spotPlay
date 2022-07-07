// empaquetar lo que vayamos a crear
import SongPlaylistRouter from './Router.js'
import express from 'express'
import SongPlaylistController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import { SongPlaylist } from '../../entity/SongPlaylist.js'

export const songPlaylistModule = () => {
  const servicesSongPlaylist = new DataJson()
  // añadir genero, album
  const songPlaylistController = new SongPlaylistController(servicesSongPlaylist, SongPlaylist)
  const songPlaylistRouter = new SongPlaylistRouter(express.Router, songPlaylistController, response, HttpCode)
  return songPlaylistRouter._router
}
