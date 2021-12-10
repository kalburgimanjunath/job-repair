const express = require('express')
const app = express()
app.get("/hello_world", (req, res) => {    
    res.send({
        hello:"world",
        foo:"bar"    
})
}) 
app.listen(3000, () => {
     console.log("server started")
})