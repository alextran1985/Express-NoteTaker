const app = require("express").Router();
const path = require("path");

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  // in our call function we will request data from our db.json file

  // using our read and write functionality from our FILE SYSTEM (fs) module we are going to access our database/dataset

  fs.readFile('./db/db.json', 'utf-8', function(error, data) {
    if(error) {
      console.log("Error: ", error);
    }

    console.log("data: ", data);
    console.log("type: ", typeof data);

    res.json(JSON.parse(data))
});

module.exports = router;