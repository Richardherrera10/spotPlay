import pg from 'pg'

export default class DataPostgresql {
  constructor () {
    this._pool = this.getConnection()
  }

  async getConnection () {
    const pool = new pg.Pool({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'dbspotplay'
    })
    return pool
  }

  async save (table, data) {
    try {
      const query = `INSERT INTO ${table} (${Object.keys(data).join(',')}) VALUES (${Object.keys(data).map((current, index) => `$${index + 1}`).join(',')})`
      console.log(query)
      const pooldb = await this.getConnection()
      const resultPool = await pooldb.query(query, Object.values(data))
      console.log(resultPool.rows)
      return resultPool.rows
    } catch (error) {
      console.log(error)
    }
  }

  async all (table) {
    try {
      const query = `SELECT * FROM ${table}`
      const pooldb = await this.getConnection()
      const resultPool = await pooldb.query(query)
      return resultPool.rows
    } catch (error) {
      console.log(error)
    }
  }

  async delete (table, data) {
    try {
      const query = `DELETE FROM ${table} WHERE _id = ${Object.values(data)[0]}`
      console.log('query es', query)
      const pooldb = await this.getConnection()
      const resultPool = await pooldb.query(query)
      console.log('resultpool.rows es', resultPool.rows)
      return resultPool.rows
    } catch (error) {
      console.log(error)
    }
  }

  async update (table, data) {
    const array1 = Object.keys(data)
    array1.shift()
    const array2 = Object.values(data)
    array2.shift()
    const newArray = array1.map((value, index) => {
      return ` ${value} = '${array2[index]}'`
    })
    const query = `UPDATE ${table} SET${newArray.toString()} where _id =${Object.values(data)[0]}`
    console.log('query es', query)
    const pooldb = await this.getConnection()
    const resultPool = await pooldb.query(query)
    console.log('resultpool.rows es', resultPool.rows)
    return resultPool.rows
  }

  async findByAttribute (table, attribute, value) {
    console.log(table, attribute, value)
    try {
      const query = `SELECT * FROM ${table} WHERE ${attribute} = $1`
      const pooldb = await this.getConnection()
      const resultPool = await pooldb.query(query, [value])
      console.log(resultPool.rows)
      return resultPool.rows[0]
    } catch (error) {
      console.log(error)
    }
  }
}
