export default class Artist {
  constructor (artist) {
    this._id = null
    this._firstName = artist.firstName
    this._lastName = artist.lastName
    this._description = artist.description
    this._avatar = artist.avatar
  }
}
