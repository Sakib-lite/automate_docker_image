const express = require('express')
const PORT = 3000
const HOST = '0.0.0.0'

// App
const app = express()
app.get('/', (req, res) => {
  console.log("TEST");
  res.send('Hello World')
});

app.listen(PORT, HOST)
console.log(`Our app running on http://${HOST}:${PORT}`)
