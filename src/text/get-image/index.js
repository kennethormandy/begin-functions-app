let begin = require('@architect/functions')

// TODO change defaultText
let defaultText = `Hello world!`

function route (req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    text: defaultText
  })
}

exports.handler = begin.text.get(route)
