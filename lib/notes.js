const fs = require("fs");
const path = require("path");

const notesJson = require('../db/db.json')

function createNewNote(body) {
    const {title, text} = body
    let addNote = {
        title,
        text
    }

    notesJson.push(addNote);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesJson)
    )

    return createNewNote;

};

module.exports = { createNewNote }