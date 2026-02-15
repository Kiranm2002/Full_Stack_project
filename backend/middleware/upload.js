const multer = require("multer");
const multerS3 = require("multer-s3")
const s3Client = require("../config/s3")
// const path = require("path");

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      cb(null, `uploads/${Date.now()}-${file.originalname}`); // unique name
    },
  }),
});

module.exports = upload;
