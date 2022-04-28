import { Request, Response } from "express";
import Notas from "../models/notes";

export const getNotes = async (req: Request, res: Response) => {
  const not = await Notas.findAll({
      where:{estado:true}
  });
  return res.json({
    notas: not,
  });
};

export const notesPost = async (req: Request, res: Response) => {
  const { body } = req;
  
  if (!body) {
    return res.status(400).json({
      msg: "falta enviar body",
    });
  }
  const notes = Notas.build(body);
  await notes.save();
  res.status(200).json({
    msg: "funciona el post",
  });
};
export const notesPut = async (req: Request, res: Response) => {
  const { body } = req;
  const id = req.params.id;
  const nota = await Notas.findByPk(id);
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
  await nota.update(body);
  res.json(nota);
};

export const notesDelete = async (req: Request, res: Response) => {
    const id = req.params.id;
    const nota = await Notas.findByPk(id);;
    if (!nota) {
        return res.status(400).json({
          msg: "No se encontro la nota",
        });
      }
      await nota.destroy()
};
