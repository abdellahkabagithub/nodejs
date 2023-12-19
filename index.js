const express = require("express")
const mysql = require("mysql")
const port = process.env.PORT || 5000
const app = express()


/**
 * l'envoi de la requête à un serveur
 */

app.get("/", (req,res) => {
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test" 
});

/**
 * On se connecte à la base de donnée
 */
connection.connect((err) => {
    if(err){
        console.error("Erreur de la connexion : " + err.stack)
        return;
    }
    console.log("Connexion reussie !")
})

/**
 * Example d'une requête
 */

connection.query("SELECT * FROM users", (err, row, fiels) => {
   if(err) throw err;
   res.json(row)
    });
    connection.end();
})

app.listen(port, () => {
    console.log("serveur is online");
})