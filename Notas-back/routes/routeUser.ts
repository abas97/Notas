import { Router } from "express";
import { getUsusario,usuarioDelete,usuarioPost,usuarioGetById,usuarioPut } from "../controllers/userController";

const router = Router();

router.get('/',getUsusario );
router.get('/:id',usuarioGetById );
router.post('/',usuarioPost );
router.put('/',usuarioPut );
router.delete('/',usuarioDelete )

export default router