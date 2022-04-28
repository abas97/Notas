"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteController_1 = require("../controllers/noteController");
const routerNotes = (0, express_1.Router)();
routerNotes.get('/', noteController_1.getNotes);
routerNotes.post('/', noteController_1.notesPost);
routerNotes.put('/:id', noteController_1.notesPut);
routerNotes.delete('/:id', noteController_1.notesDelete);
exports.default = routerNotes;
//# sourceMappingURL=route.note.js.map