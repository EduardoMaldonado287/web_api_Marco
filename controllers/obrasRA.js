const ObrasRA_Model = require("../models/ObrasRA");
const fs = require("fs");
const { fileURLToPath } = require("url");

module.exports = {
  getObrasRA: async (req, res) => {
    try {
      const obrasRA = await ObrasRA_Model.find();
      return res.json(obrasRA);
    } catch (err) {
      return res.json({ message: `Erro al obtener obrasRA. Err: ${err}` });
    }
  },
  
  createObraRA: (req, res) => {
    const saveObraRA =  ObrasRA_Model({ //saveImage
      title: req.body.title,
      imageName: req.files["imageName"][0].originalname,
      model3dName: req.files["model3dName"][0].originalname,
      audioDescriptionName: req.files["audioDescriptionName"][0].originalname,
      creationYear: req.body.creationYear,
      author: req.body.author,
      description: req.body.description,
      type: req.body.type,
      isInExhibition: req.body.isInExhibition,
    });
    saveObraRA
      .save()
      .then((res) => {
        console.log("Files are saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('Obra-RA Agregada')
  },

};

// usdz


      // img: {
      //   data: fs.readFileSync("public/uploads/" + req.file.filename),
      //   contentType: "image/png",
      // },
      // img: req.file.originalname,