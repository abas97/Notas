import { Router } from "express";
import {getNotes,notesDelete,notesPut,notesPost} from '../controllers/noteController'

const routerNotes = Router();

routerNotes.get('/',getNotes );

routerNotes.post('/',notesPost );
routerNotes.put('/:id',notesPut );
routerNotes.delete('/:id',notesDelete )

export default routerNotes