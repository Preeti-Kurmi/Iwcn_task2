const express = require('express');
const { addNote, deleteNote, getNote } = require('../controller/notecontroller');

const router = express.Router();


router.post('/addnote', addNote);
router.get('/getnote',getNote)
router.delete('/deletenote/:id',deleteNote)

module.exports = router;