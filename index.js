const express = require("express")
const port = process.env.PORT || 5000

const app = express();

//Utilise la route users
app.use("/", require("./routes/users"))


app.listen(port, () => {
    console.log("serveur is online");
})