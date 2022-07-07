// empaquetar lo que vayamos a crear
import PlaylistRouter from './Router.js'
import express from 'express'
import PlaylistController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import { Playlist, SongPlaylist } from '../../entity/Playlist.js'

export const playlistModule = () => {
  const servicesPlaylist = new DataJson()
  const playlistController = new PlaylistController(servicesPlaylist, Playlist, SongPlaylist)
  const playlistRouter = new PlaylistRouter(express.Router, playlistController, response, HttpCode)
  return playlistRouter._router
}
