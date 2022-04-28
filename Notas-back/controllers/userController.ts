import { Request , Response } from "express";
import Usuario from "../models/usuarios";

export const usuarioGetById= async(req:Request,res:Response)=>{
    const id=req.params.id
    const usuario=await Usuario.findByPk(id)
    if(usuario)
    {res.json({
        usuario:usuario
    })}
    else{
        res.status(404).json({
            msq:'no se encontro el usuario'
        })
    }
}
export const getUsusario= async (req:Request,res:Response)=>{
    const usuarios = await Usuario.findAll();
    res.json({
        msg:usuarios
    })
}
export const usuarioPost=(req:Request,res:Response)=>{
    
}
export const usuarioPut=(req:Request,res:Response)=>{
    res.json({
        msg:'funciona el put'
    })
}
export const usuarioDelete=(req:Request,res:Response)=>{
    res.json({
        msg:'funciona el delete'
    })
}