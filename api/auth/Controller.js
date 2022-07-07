export default class AuthController {
  // encargar de guardar obtener datos que se le envien, hablar con la base de datos
  constructor (authServices, entity, comparePassword, generateToken) {
    this._services = authServices
    this._entity = entity
    // compara password
    this._comparePassword = comparePassword
    this._generateToken = generateToken
  }
  // verificar si existe username y si existe comparar las password, si coinciden
  // usuario registrado dentro de sistema y generar token

  authenticationUser (user) {
    try {
      const result = this._services.findByAttribute('user', '_username', user.username)
      // si no encontro credenciales
      if (result !== null) {
        // dos pswd encriptada y no encriptada
        const resultComparePassword = this._comparePassword(user.password, result._password)
        if (resultComparePassword) {
          const tokenUser = this._generateToken(result._id)
          // objeto de respuesta correcta
          return new this._entity({
            state: true,
            username: result._username,
            email: result._email,
            token: tokenUser,
            message: 'Login successsful'
          })
        } else {
          return new this._entity({
            state: false,
            username: '',
            email: '',
            token: '',
            message: 'Sus credenciales son incorrectos'
          })
        }
      } else {
        return new this._entity({})
      }
    } catch (error) {
      return new Error(error)
    }
  }
}
