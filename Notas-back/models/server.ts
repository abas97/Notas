import express,{Application } from "express";
import db from "../DB/connection";
import router from "../routes/routeUser"
import routerNotes from "../routes/route.note"
import cors from 'cors'
class Server {
    private app:Application;
    private port:string
    private path={
        pathUser:'/api/usuario',
        pathNotes:'/api/notes'
    }
    constructor(){
        this.app=express()
        this.port=process.env.PORT || '8000'
        this.middlewares()
        this.dbConnection()
        this.router()
    }
    middlewares(){
        //this.app.use(cors())
        this.app.use(express.json())
    }
    async dbConnection(){
        try {
            await db.authenticate()
        } catch (error) {
            throw error
        }
    }
    router(){
        this.app.use(this.path.pathUser,router)
        this.app.use(this.path.pathNotes,routerNotes)
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log('estoy escuchabdo en el puerto',this.port)
        })
    }
}

export default Server