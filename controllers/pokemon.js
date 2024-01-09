//Dependencies

const express    = require('express');
const Pokemon    = require('../models/pokemon.js');

//Router Object

const router= express.Router();

// INDEX

router.get('/', (req, res) => {
    res.render('index.ejs', { pokes: Pokemon.getAll() });
    });

// New Route GET /pokemon/new -> page with a create form

router.get("/new", (req, res) => {
    res.render("new.ejs")
})

    // Create Route POST /soda -> creates a new Poke, redirect back to index

router.post("/", (req, res) => {
    Pokemon.create(req.body)
    res.redirect("/pokemon")
})

// EDIT Route Get /pokemon/:id/edit -> create form to update pokemon

router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        poke: Pokemon.getOne(req.params.id),
        index: req.params.id
    })
})

// Update Route Put /pokemon/:id -> receives form data, updates pokemon, redirects to index

router.put("/:id", (req,res) => {
    Pokemon.update(req.params.id, req.body)
    res.redirect("/pokemon")
})

// Destroy Route Delete /pokemon/:id => deletes an individual pokemon

router.delete("/:id", (req, res) => {
    Pokemon.destroy(req.params.id)
    res.redirect("/pokemon")
})
    
// SHOW ROUTE

    router.get('/:id', (req, res) => {
    res.render('show.ejs', { poke: Pokemon.getOne([req.params.id]),
        index: req.params.id });
    });

//Export Router
module.exports=router;