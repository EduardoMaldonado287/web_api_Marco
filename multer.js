const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

      if (path.extname(file.originalname) == ".png" || path.extname(file.originalname) == ".jpEg" ) {
        cb(null, "public/images");
        // console.log(path.extname(file.originalname));
      }
      else if (path.extname(file.originalname) == ".mp3"){
        // console.log(path.extname(file.originalname));
        cb(null, "public/audios");
      }
      else {
        // console.log(path.extname(file.originalname));
        cb(null, "public/3dModels");
      }
    },
    filename: (req, file, cb) => {
      // cb(null, req.body.name + path.extname(file.originalname));
      cb(null, file.originalname); // quitarlse los espacios
    },
  });
  
  const upload = multer({ storage: storage });

  module.exports = upload