const express = require ('express')
const app = express()
const routes = require("./routes/router.js")
const path = require("path")


app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname+ '/public'))
app.use(express.Router)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.listen (3000, ()=>console.log("Running on port 3000"))