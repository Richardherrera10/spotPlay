import mongoose from 'mongoose'
// Crear un esquema de estrucutra para base de datos
const userSchema = new mongoose.Schema({
  _username: {
    type: String,
    required: true
  },
  _email: {
    type: String,
    required: true
  },
  _password: {
    type: String,
    required: true
  },
  _role: {
    type: String,
    required: true
  }
})
const genreSchema = new mongoose.Schema({
  _name: {
    type: String,
    required: true
  }
})
const albumSchema = new mongoose.Schema({
  _name: {
    type: String,
    required: true
  },
  _description: {
    type: String,
    required: true
  },
  _image: {
    type: String,
    required: true
  }
})
const artistSchema = new mongoose.Schema({
  _firstName: {
    type: String,
    required: true
  },
  _lastName: {
    type: String,
    required: true
  },
  _description: {
    type: String,
    required: true
  },
  _avatar: {
    type: String,
    required: true
  }
})
const playlistSchema = new mongoose.Schema({
  _title: {
    type: String,
    required: true
  },
  _cover: {
    type: String,
    required: true
  },
  _description: {
    type: String,
    required: true
  },
  _idUsuario: {
    type: Number,
    required: true
  }
})
const songSchema = new mongoose.Schema({
  _title: {
    type: String,
    required: true
  },
  _uri: {
    type: String,
    required: true
  },
  _duration: {
    type: String,
    required: true
  },
  _image: {
    type: String,
    required: true
  },
  _idArtista: {
    type: Number,
    required: true
  },
  _idGenre: {
    type: Number,
    required: true
  },
  _idAlbum: {
    type: Number,
    required: true
  }
})

const songPlaylistSchema = new mongoose.Schema({
  _idPlaylist: {
    type: String,
    required: true
  },
  _idSong: {
    type: String,
    required: true
  }
})

const roleSchema = new mongoose.Schema({
  _role: {
    type: String,
    required: true
  },
  _description: {
    type: String,
    required: true
  },
  _type: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('User', userSchema)
const albumModel = mongoose.model('Album', albumSchema)
const artistModel = mongoose.model('Artist', artistSchema)
const genreModel = mongoose.model('Genre', genreSchema)
const playlistModel = mongoose.model('Playlist', playlistSchema)
const songModel = mongoose.model('Song', songSchema)
const songPlaylistModel = mongoose.model('SongPlaylist', songPlaylistSchema)
const roleModel = mongoose.model('role', roleSchema)

const models = {
  user: userModel,
  album: albumModel,
  artist: artistModel,
  genre: genreModel,
  playlist: playlistModel,
  song: songModel,
  songPlaylist: songPlaylistModel,
  role: roleModel
}

export default models
