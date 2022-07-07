// los controllers se encargan de realizar la lógica del negocio
// operaciones que necesita, calculos
class ArtistController {
  constructor (servicesArtist, artist) {
    this._service = servicesArtist
    this._entity = artist
  }

  getAllArtist () {
    const response = this._service.all('artist')
    return response
  }

  createArtist (artist) {
    const newArtist = new this._entity(artist)
    const response = this._service.save('artist', newArtist)
    return response
  }

  updateArtist (artist) {
    const updatedArtist = new this._entity(artist)
    updatedArtist._id = artist.id
    console.log('ctrl', updatedArtist)
    const response = this._service.update('artist', updatedArtist)
    return response
  }

  deleteArtist (artist) {
    console.log('escritp', artist)
    const artistToDelete = new this._entity(artist)
    artistToDelete._id = artist.id
    console.log('ctrl', artistToDelete)
    const response = this._service.delete('artist', artistToDelete)
    return response
  }
}

export default ArtistController
