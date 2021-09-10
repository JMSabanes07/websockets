import mysql from 'serverless-mysql';

const database = mysql({
   config:{
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
   }
})

const db = async (query, values) => {
   const results = await database.query(query, values);

   await database.end()

   return results
}

export default db