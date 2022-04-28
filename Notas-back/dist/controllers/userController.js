"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioDelete = exports.usuarioPut = exports.usuarioPost = exports.getUsusario = exports.usuarioGetById = void 0;
const usuarios_1 = __importDefault(require("../models/usuarios"));
const usuarioGetById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const usuario = yield usuarios_1.default.findByPk(id);
    if (usuario) {
        res.json({
            usuario: usuario
        });
    }
    else {
        res.status(404).json({
            msq: 'no se encontro el usuario'
        });
    }
});
exports.usuarioGetById = usuarioGetById;
const getUsusario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuarios_1.default.findAll();
    res.json({
        msg: usuarios
    });
});
exports.getUsusario = getUsusario;
const usuarioPost = (req, res) => {
};
exports.usuarioPost = usuarioPost;
const usuarioPut = (req, res) => {
    res.json({
        msg: 'funciona el put'
    });
};
exports.usuarioPut = usuarioPut;
const usuarioDelete = (req, res) => {
    res.json({
        msg: 'funciona el delete'
    });
};
exports.usuarioDelete = usuarioDelete;
//# sourceMappingURL=userController.js.map