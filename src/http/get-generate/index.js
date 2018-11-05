const Jimp = require('jimp')
let begin = require('@architect/functions')

let makeImage = (text, cb) => {
  return Jimp.read('src/http/get-generate/media/photo-1518640467707-6811f4a6ab73.jpg')
    .then(image => {
      return Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(font => {
        image.print(font, 20, 20, text);
        return image.getBufferAsync(Jimp.MIME_PNG).then(buffer => {
          let str = buffer
          return cb(str)
        }).catch(err => console.error(err))
      }).catch(err => console.error(err))
    }).catch(err => console.error(err))
}

exports.handler = async function http(req, res) {
  try {
    let text = 'Hello, world'

    if (req.query && req.query.text) {
      text = req.query.text
    }

    return makeImage(text, (image) => {
      return {
        status: 200,
        type: 'image/png',
        body: image,
        cors: true
      }
    })

  } catch(e) {
    return {
      status: 500,
      type: 'application/json; charset=utf8',
      body: JSON.stringify({
        name: e.name,
        message: e.message,
        stack:e.stack
      }, null, 2)
    }
  }
}
