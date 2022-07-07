// empaquetar lo que vayamos a crear
import SongRouter from './Router.js'
import express from 'express'
import SongController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import { DataJson } from '../../store/DataJson.js'
import { Song } from '../../entity/Song.js'

export const songModule = () => {
  const servicesSong = new DataJson()
  // añadir genero, album
  const songController = new SongController(servicesSong, Song)
  const songRouter = new SongRouter(express.Router, songController, response, HttpCode)
  return songRouter._router
}
