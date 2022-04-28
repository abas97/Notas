import { DataTypes } from "sequelize";
import db from "../DB/connection";

const Usuario=db.define('usuarios',{
    nombre:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
})

export default Usuario