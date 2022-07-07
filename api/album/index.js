import AlbumRouter from './Router.js'
import express from 'express'
import AlbumController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import Album from '../../entity/Album.js'

export const albumModule = () => {
  const servicesAlbum = new DataJson()
  const albumController = new AlbumController(servicesAlbum, Album)
  const albumRouter = new AlbumRouter(express.Router, albumController, response, HttpCode)
  return albumRouter._router
}
