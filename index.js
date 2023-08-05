const express = require('express');
const cors = require('cors');
const PORT = 3000;
const { agregarPost, obtenerPosts } = require('./consultas');
const app = express();
app.disable('x-powered-by');

//var bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());

app.listen(PORT, console.log(`Servidor iniciado en: http://localhost:${PORT}`));

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

app.post('/posts', async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    const result = await agregarPost(titulo, url, descripcion);
    res.json(result);

    console.log(`🟢 Cliente : Se ha agregado correctamente el post
    `);
  } catch (err) {
    console.error(err.message);
  }
});

app.get('/posts', async (req, res) => {
  try {
    const resultado = await obtenerPosts();
    res.json(resultado);
  } catch (err) {
    console.error(err.message);
  }
});
