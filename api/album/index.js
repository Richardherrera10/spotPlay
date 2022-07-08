import AlbumRouter from './Router.js'
import express from 'express'
import AlbumController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import Album from '../../entity/Album.js'
import DbMongo from '../../store/DBMongo.js'

export const albumModule = () => {
  const servicesAlbum = new DbMongo()
  const albumController = new AlbumController(servicesAlbum, Album)
  const albumRouter = new AlbumRouter(express.Router, albumController, response, HttpCode)
  return albumRouter._router
}
