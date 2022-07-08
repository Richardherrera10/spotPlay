// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class ArtistController {
  constructor (servicesArtist, artist) {
    this._service = servicesArtist
    this._entity = artist
  }

  async getAllArtist () {
    const response = await this._service.all('artist')
    return response
  }

  async createArtist (artist) {
    const newArtist = await new this._entity(artist)
    const response = this._service.save('artist', newArtist)
    return response
  }

  async updateArtist (artist) {
    const updatedArtist = new this._entity(artist)
    updatedArtist._id = artist.id
    const response = await this._service.update('artist', updatedArtist._id, updatedArtist)
    return response
  }

  async deleteArtist (artist) {
    const artistToDelete = new this._entity(artist)
    artistToDelete._id = artist.id
    const response = await this._service.delete('artist', artistToDelete)
    return response
  }
}

export default ArtistController
