const express = require("express")

const router = express.Router()

/**
 * Déclaration des routes possibles à partir de la class user
 */

router.get("/", (request, response) => {
    response.json({message: "Tous les Utilisateurs"})
})

router.get("/:id", (request, response) => {
   const id = request.params.id
    response.status(200).json({
        id
    })
})

// exportation du module pour qu'il soit reutilisable
module.exports = router ;
