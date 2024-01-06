//Dependencies

const express    = require('express');
const Pokemon    = require('../models/pokemon.js');

//Router Object

const router= express.Router();

// INDEX
router.get('/', (req, res) => {
    res.render('index.ejs', { pokes: Pokemon.getAll() });
    });
    
    
    // SHOW
    router.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
    });

// New
// GET /pokemon/new
// Edit
// GET /pokemon/:id/edit
// Create
// POST /pokemon
// Update
// PUT /pokemon/:id
// Destroy
// DELETE /pokemon/:id
//Export Router
module.exports=router;