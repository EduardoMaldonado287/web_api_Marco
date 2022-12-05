const ObrasGuardadas = require("../models/obrasGuardadas");
const fs = require("fs");
// const { fileURLToPath } = require("url");

module.exports = {
  getObrasGuardadas: async (req, res) => {
    try {
      const obrasGuardadas = await ObrasGuardadas.find();
      return res.json(obrasGuardadas);
    } catch (err) {
      return res.json({ message: `Erro al obtener expos. Err: ${err}` });
    }
  },
  
  addObrasGuardadas: (req, res) => {
    const saveObraGuardada =  ObrasGuardadas({ //saveImage
      title: req.body.title,
      imageName: req.file.originalname,
      author: req.body.author,
      description: req.body.description,
      url: req.body.url,
    });
    saveObraGuardada
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('Obra Agregada')
  },
};
