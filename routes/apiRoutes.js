const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const { createNewNote } = require('../lib/notes.js');

const notes = require('../db/db.json');
console.log(notes);

router.get('/notes', (req, res) => {
   
    let results = notes
    console.log(results)
    res.json(results)
    
});

router.post('/notes', (req, res) => {
    let Note = createNewNote(req.body, notes)
    console.log(Note)
    res.json(Note) 
});

// router.post('/notes', (req, res) => {
//     // set id based on what the next index of the array will be
//     req.body.id = notes.length.toString();
  
//     if (!validateNotes(req.body)) {
//       res.status(400).send('The note is not properly formatted.');
//     } else {
//       const Note = createNewAnimal(req.body, notes);
//       res.json(Note);
//     }
//   });

module.exports = router

