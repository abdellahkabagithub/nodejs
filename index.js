const express = require("express")
const port = process.env.PORT || 5000

const app = express();


//L'envoie d'une requête
app.get("/", (request, response) => {
    response.send("Hello World !")
})

app.get("/", (request,response) => {
    response.status(200).send("Hello World ! ")
})

app.listen(port, () => {
    console.log("serveur is online");
})