const {Router} = require("express")
const router = Router()
const {index, minecraft} = require("../controllers/controller.js")

router.get('/', index)
router.get('/minecraft.html', (req,res)=>res.render('minecraft.html'))