import mongoose from 'mongoose'
import { config } from '../config/default.js'
import models from './MongoModels.js'

const mongodb = async () => {
  try {
    const db = await mongoose.connect(config.dbmongo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected: ${db.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

export default class DbMongo {
  constructor () {
    mongodb()
    this._models = models
  }

  async save (table, data) {
    const newEntry = this._models[table](data)
    await newEntry.save()
    return 'item created'
  }

  async all (table) {
    const result = await this._models[table].find()
    return result
  }

  async delete (table, id) {
    const res = await this._models[table].findByIdAndDelete(id)
    return res
  }

  async update (table, id, data) {
    const res = await this._models[table].findByIdAndUpdate(id, data)
    return res
  }

  async findByAttribute (model, attribute, value) {
    try {
      const findByAttribute = await this._models[model].find({ [attribute]: value })
      if (findByAttribute.length > 0) {
        return findByAttribute[0]
      }
      return `no item of ${model}`
    } catch (error) {
      console.log(error)
      return `no item of ${model}`
    }
  }
}

// const prueba = new DbMongo()

/* prueba.save(userModel, {
  _username: 'test1',
  _email: 'email@email.com',
  _password: 'test123'
}).then(result => {
  console.log(result)
}, error => {
  console.log(error)
}) */

/* prueba.save(songModel, {
  _title: 'title1',
  _uri: 'uri1',
  _description: 'description1'
}).then(result => {
  console.log(result)
}, error => {
  console.log(error)
}) */

/* const test = new DbMongo()

const result = test.save({
  _name: 'nuevo genero'
}).then(result => {
  console.log(result)
}, error => {
  console.log(error)
}) */
// es una promesa, se puede tambien con async

/* test.update('62c7090f6782ba458de18313', {
  _email: 'nuevoEmail@gmail.com'
}).then(result => {
  console.log(result)
}, error => {
  console.log(error)
}) */

/* test.delete('62c7071b42c187d409474bf9').then(result => {
  console.log(result)
}, error => {
  console.log(error)
}) */

/* test.all().then(result => {
  console.log(result)
}, error => {
  console.log(error)
}) */

/* const result = test.insertData({
  _username: 'test1',
  _email: 'email@email.com',
  _password: 'test123'
}).then(result => {
  console.log(result)
}, error => {
  console.log(error)
}) */
