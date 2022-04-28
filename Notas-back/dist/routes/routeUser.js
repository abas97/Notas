"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.get('/', userController_1.getUsusario);
router.get('/:id', userController_1.usuarioGetById);
router.post('/', userController_1.usuarioPost);
router.put('/', userController_1.usuarioPut);
router.delete('/', userController_1.usuarioDelete);
exports.default = router;
//# sourceMappingURL=routeUser.js.map