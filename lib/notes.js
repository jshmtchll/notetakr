const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid')

const notesJson = require('../db/db.json')

function createNewNote(body) {
    const {title, text} = body
    let addNote = {
        title,
        text,
        id: uniqid()
    }

    notesJson.push(addNote);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesJson)
    )

    return addNote;

};

module.exports = { createNewNote }