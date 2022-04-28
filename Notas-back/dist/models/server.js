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
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../DB/connection"));
const routeUser_1 = __importDefault(require("../routes/routeUser"));
const route_note_1 = __importDefault(require("../routes/route.note"));
class Server {
    constructor() {
        this.path = {
            pathUser: '/api/usuario',
            pathNotes: '/api/notes'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.middlewares();
        this.dbConnection();
        this.router();
    }
    middlewares() {
        //this.app.use(cors())
        this.app.use(express_1.default.json());
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
            }
            catch (error) {
                throw error;
            }
        });
    }
    router() {
        this.app.use(this.path.pathUser, routeUser_1.default);
        this.app.use(this.path.pathNotes, route_note_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('estoy escuchabdo en el puerto', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map