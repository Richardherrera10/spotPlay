// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class AlbumController {
  constructor (servicesAlbum, album) {
    this._service = servicesAlbum
    this._entity = album
  }

  async getAllAlbum () {
    const response = await this._service.all('album')
    return response
  }

  async createAlbum (album) {
    const newAlbum = new this._entity(album)
    const response = await this._service.save('album', newAlbum)
    return response
  }

  async updateAlbum (album) {
    const updatedAlbum = new this._entity(album)
    updatedAlbum._id = album.id
    console.log('ctrl', updatedAlbum)
    const response = await this._service.update('album', updatedAlbum._id, updatedAlbum)
    return response
  }

  async deleteAlbum (album) {
    const albumToDelete = new this._entity(album)
    albumToDelete._id = album.id
    console.log('ctrl', albumToDelete)
    const response = await this._service.delete('album', albumToDelete)
    return response
  }
}

export default AlbumController
