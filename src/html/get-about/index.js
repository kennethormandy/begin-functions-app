let begin = require('@architect/functions')

// TODO change defaultHTML
let defaultHTML = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>About</title>
  </head>
  <body style="font-family: sans-serif;">
    <h1>About</h1>
    <p>This is the about page.</p>
  </body>
</html>
`

function route (req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    html: defaultHTML
  })
}

exports.handler = begin.html.get(route)
