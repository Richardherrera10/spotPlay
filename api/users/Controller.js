// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class UserController {
  constructor (servicesUser, user, hashPassword, comparePassword, sendEmail) {
    this._service = servicesUser
    this._entity = user
    this._hashPassword = hashPassword
    this._comparePassword = comparePassword
    this._sendEmail = sendEmail
  }

  async getAllUser () {
    const response = await this._service.all('user')
    return response
  }

  async createUser (user) {
    const newUser = new this._entity(user)
    newUser.encryptPassword(user.password, this._hashPassword)
    const response = await this._service.save('user', newUser)
    console.log('nuevo user creado', newUser)
    this._sendEmail(newUser._email, newUser._username)
    return response
  }

  async updateUser (user) {
    console.log('og user', user)
    const updatedUser = new this._entity(user)
    updatedUser._id = user.id
    delete updatedUser._password
    const response = await this._service.update('user', updatedUser._id, updatedUser)
    return response
  }

  async deleteUser (user) {
    const userToDelete = new this._entity(user)
    userToDelete._id = user.id
    const response = await this._service.delete('user', userToDelete._id)
    return response
  }
}

export default UserController
