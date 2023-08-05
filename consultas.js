const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'JPW',
  password: 'gogo2580',
  port: 5432,
  database: 'likeme',
  allowExitOnIdle: true,
});

const agregarPost = async (titulo, img, descripcion) => {
  const consulta = 'INSERT INTO posts VALUES(DEFAULT, $1, $2, $3)';
  const valores = [titulo, img, descripcion];
  await pool.query(consulta, valores);
  console.log('🟢 Servidor: Nuevo registro creado en la tabla posts');
};

const obtenerPosts = async () => {
  const { rows } = await pool.query('SELECT * FROM posts');
  return rows;
};

module.exports = { agregarPost, obtenerPosts };
