app.post('/api/notes', (req, res) => {
    // in our call function we will request data from our db.json file
    const dbJson = JSON.parse(fs.readFileSync("db/db.json", newNotes));
    const newNotes = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(newNotes);
    fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
    res.json(dbJson);
  });

// This is were the delete is handled
Router.delete('/api.notes/:id', (req, res)=>{
    let data = fs.readFileSync("db/db.json", "utf8");
    const dataJSON = JSON.parse(data);
    const newNotes = dataJSON.filter((note)=>{
        return note.id !== req.params.id;
    });
});

module.exports = router;