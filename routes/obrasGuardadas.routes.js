const { Router } = require("express");
const router = Router();
const upload = require("../multer.js")

//const expoController = require("../controllers/expo.js");
const { getObrasGuardadas, addObrasGuardadas } = require("../controllers/obrasGuardadas.js");
// prettier-ignore
router.route("/")
    .get(getObrasGuardadas)
    .post(upload.single("imageName"), addObrasGuardadas);

module.exports = router;
