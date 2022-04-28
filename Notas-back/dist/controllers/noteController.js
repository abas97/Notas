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
exports.notesDelete = exports.notesPut = exports.notesPost = exports.getNotes = void 0;
const notes_1 = __importDefault(require("../models/notes"));
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const not = yield notes_1.default.findAll({
        where: { estado: true }
    });
    return res.json({
        notas: not,
    });
});
exports.getNotes = getNotes;
const notesPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    if (!body) {
        return res.status(400).json({
            msg: "falta enviar body",
        });
    }
    const notes = notes_1.default.build(body);
    yield notes.save();
    res.status(200).json({
        msg: "funciona el post",
    });
});
exports.notesPost = notesPost;
const notesPut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req.params.id;
    const nota = yield notes_1.default.findByPk(id);
    if (!body) {
        return res.status(400).json({
            msg: "falta enviar body",
        });
    }
    if (!nota) {
        return res.status(400).json({
            msg: "No se encontro la nota",
        });
    }
    yield nota.update(body);
    res.json(nota);
});
exports.notesPut = notesPut;
const notesDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const nota = yield notes_1.default.findByPk(id);
    ;
    if (!nota) {
        return res.status(400).json({
            msg: "No se encontro la nota",
        });
    }
    yield nota.destroy();
});
exports.notesDelete = notesDelete;
//# sourceMappingURL=noteController.js.map