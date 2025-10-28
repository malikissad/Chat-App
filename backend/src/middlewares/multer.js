const multer = require('multer')
const {cloudinary} = require('../../script.js')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'avatars',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});


const upload = multer({ storage })

module.exports = {upload}