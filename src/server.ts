import express from 'express';
import router from './routes/router'
import db from './config/db'
import cors, {CorsOptions} from 'cors'
import morgan from 'morgan'

//Conectar a nuestra base de datos
async function connectDB(){

    try {
        await db.authenticate()
        db.sync()
        console.log('Conexion exitosa a la base de datos')
    } catch (error) {
        console.log(error)
        console.log('hubo un error al conectar la BD')
    }
}
connectDB()

//servidor de express
const server = express();
// Permitir conexiones
// Origin es quien me  esta enviando la peticion

const corsOptions: CorsOptions = {
    origin : function(origin, callback){
        if(origin === process.env.FRONTEND_URL){
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}

server.use(cors(corsOptions))


//Leer datos del formulario

//dev te dice cuanto duro la consulta en hacerse
//combine Te da la informacion de todo
//common hora y fecha y como se realizo la peticion
//short tipo de consulta
//tiny tipo de consulta con menos información
server.use(morgan('dev'))

server.use(express.json())

//routing
server.use("/api/products", router)

export default server;