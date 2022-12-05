const { Router } = require("express");
const router = Router();
const upload = require("../multer.js")

const { getObrasRA, createObraRA } = require("../controllers/obrasRA.js");

const cpUpload = upload.fields([{ name: 'imageName', maxCount: 1 }, { name: 'model3dName', maxCount: 1 }, 
    { name: 'audioDescriptionName', maxCount: 1 }]);

// prettier-ignore
router.route("/")
    .get(getObrasRA)
    .post(cpUpload, createObraRA);

module.exports = router;



