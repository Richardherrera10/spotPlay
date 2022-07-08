export default class Role {
  constructor (roles) {
    this._id = null
    this.role = roles.roles
    this._description = roles._description
    this.type = roles.type
  }
}
