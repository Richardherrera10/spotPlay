// crear configuraciones de librerias a utilizar
// al cambiar librerias solo se cambia este archivo
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from '../config/default.js'

export const helpers = {
  encryptPassword: (password) => {
    return bcrypt.hashSync(password, 10)
  },
  comparePassword: (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword)
  },
  generateToken: (idUser) => {
    return jwt.sign({
      id: idUser
    }, config.jwt.secret, {
      expiresIn: '1h'
    })
  },
  // sirve para hacer el middleware
  verifyToken: (token) => {
    return jwt.verify(token, config.jwt.secret)
  }

}
