import ArtistRouter from './Router.js'
import express from 'express'
import ArtistController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import Artist from '../../entity/Artist.js'
import DbMongo from '../../store/DBMongo.js'

export const artistModule = () => {
  const servicesArtist = new DbMongo()
  const artistController = new ArtistController(servicesArtist, Artist)
  const artistRouter = new ArtistRouter(express.Router, artistController, response, HttpCode)
  return artistRouter._router
}
