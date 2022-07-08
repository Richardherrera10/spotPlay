import RoleRouter from './Router.js'
import express from 'express'
import RoleController from './Controller.js'
import { response } from '../../response/response.js'
import HttpCode from '../../response/httpcode.js'
import Role from '../../entity/Role.js'
import DbMongo from '../../store/DBMongo.js'

export const roleModule = () => {
  const servicesRole = new DbMongo()
  const roleController = new RoleController(servicesRole, Role)
  const roleRouter = new RoleRouter(express.Router, roleController, response, HttpCode)
  return roleRouter._router
}
