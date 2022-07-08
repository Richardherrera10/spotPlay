import GenreRouter from './Router.js'
import express from 'express'
import GenreController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import Genre from '../../entity/Genre.js'
import DbMongo from '../../store/DBMongo.js'

export const genreModule = () => {
  const servicesGenre = new DbMongo()
  const genreController = new GenreController(servicesGenre, Genre)
  const genreRouter = new GenreRouter(express.Router, genreController, response, HttpCode)
  return genreRouter._router
}
