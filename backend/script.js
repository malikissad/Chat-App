require('dotenv').config()

const {v2:cloudinary} = require('cloudinary')

cloudinary.config({
    cloud_name: 'dvi13oa0y',
    api_key: '186337526455824',
    api_secret: '5h0OXGXTr4_eW7Oda3-FIfsMyfM'
});


(async () => {
    const send = await cloudinary.uploader.upload('./image/background.svg')
    console.log(send.secure_url)
})()