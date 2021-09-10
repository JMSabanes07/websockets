import db from '/database/db';

const handlerAuth = async (req, res) => {
  if(req.method = 'POST'){
    const { username, password } = req.body

    const results = await db('SELECT * FROM usuarios WHERE username = BINARY ? AND password = ?', [username, password])
  
    if(results[0]) res.status(200).json(results)
    else res.status(400).json({
      msg: 'No encontró el usuario en la base de datos'
    })
  }

}

export default handlerAuth