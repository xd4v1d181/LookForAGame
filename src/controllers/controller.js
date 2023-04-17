const controller = {}

controller.index = (req, res) =>{
    res.sendFile('index.html')
}
controller.minecraft = (req,res) =>{
    res.sendFile('minecraft.html')
}

module.exports = {
    index, minecraft
} = controller