// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class RoleController {
  constructor (servicesAlbum, role) {
    this._service = servicesAlbum
    this._entity = role
  }

  async getAllRole () {
    const response = await this._service.all('album')
    return response
  }

  async createRole (role) {
    const newRole = new this._entity(role)
    const response = await this._service.save('role', newRole)
    return response
  }

  async updateRole (role) {
    const updatedRole = new this._entity(role)
    updatedRole._id = role.id
    console.log('ctrl', updatedRole)
    const response = await this._service.update('role', updatedRole._id, updatedRole)
    return response
  }

  async deleteRole (role) {
    const RoleToDelete = new this._entity(role)
    RoleToDelete._id = role.id
    console.log('ctrl', RoleToDelete)
    const response = await this._service.delete('role', RoleToDelete)
    return response
  }
}

export default RoleController
