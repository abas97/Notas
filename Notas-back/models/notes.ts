import { DataTypes } from "sequelize";
import db from "../DB/connection";

const Notas=db.define('Notas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    titulo:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    },
   
})

export default Notas