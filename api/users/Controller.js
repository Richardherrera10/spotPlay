// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class UserController {
  constructor (servicesUser, user, hashPassword, comparePassword) {
    this._service = servicesUser
    this._entity = user
    this._hashPassword = hashPassword
    this._comparePassword = comparePassword
  }

  async getAllUser () {
    const response = await this._service.all('users')
    return response
  }

  async createUser (user) {
    const newUser = new this._entity(user)
    newUser.encryptPassword(user.password, this._hashPassword)
    delete newUser._id
    const response = await this._service.save('users', newUser)
    return response
  }

  async updateUser (user) {
    const updatedUser = new this._entity(user)
    updatedUser._id = user.id
    delete updatedUser._password
    const response = await this._service.update('users', updatedUser)
    return response
  }

  async deleteUser (user) {
    const userToDelete = new this._entity(user)
    userToDelete._id = user.id
    const result = await this._service.findByAttribute('users', '_username', user.username)
    const comparePassword = this._comparePassword(user.password, result._password)
    console.log('result find', result)
    if (comparePassword) {
      userToDelete._password = result._password
      console.log('misma pswd')
      const response = await this._service.delete('users', userToDelete)
      return response
    } else {
      return 'incorrect password'
    }
  }
}

export default UserController
