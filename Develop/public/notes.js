const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../db/helpers/fsUtils.js');

// GET Route for retrieving all the saved notes
notes.get('/', (req, res) =>
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting notes
notes.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { notes } = req.body;
  
    // If all the required properties are present
    if (notes) {
      // Variable for the object we will save
      const newNotes = {
       notes,
      };
  
      readAndAppend(newNotes, './db/db.json');
  
      const response = {
        status: 'success',
        body: newNotes,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting notes');
    }
  });
  
  module.exports = notes;
