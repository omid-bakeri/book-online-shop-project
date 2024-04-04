const express = require("express")

const app = express();

app.get("/" , (req , res) => {
    res.send("this is a message from server")
})

const port = 3000;
app.listen(port , (req , res) => {
    console.log(`server run in localhost:${port}`)
})