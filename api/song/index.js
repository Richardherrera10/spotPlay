// empaquetar lo que vayamos a crear
import SongRouter from './Router.js'
import express from 'express'
import SongController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { Song } from '../../entity/Song.js'
import DbMongo from '../../store/DBMongo.js'
import { chekToken } from './secure.js'

export const songModule = () => {
  const servicesSong = new DbMongo()
  // añadir genero, album
  const songController = new SongController(servicesSong, Song)
  const songRouter = new SongRouter(express.Router, songController, response, HttpCode, chekToken) // chekToken)
  return songRouter._router
}
