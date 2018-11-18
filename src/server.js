/**
 * node src/server にて起動
 */
const express = require("express")
const renderer = require("vue-server-renderer").createRenderer()
// npm build で生成したmain.js をロード
const {createApp} = require("../dist/main")

const server = express()

server.get("*", (req, res) => {
  const app = createApp()

  renderer.renderToString(app).then(html => {
    res.end(html)
  })
})

server.listen(8000, () => console.log("Started server on port 8000."))
