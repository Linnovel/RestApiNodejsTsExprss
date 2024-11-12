import express from 'express';
import router from './routes/router'
import db from './config/db'

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

//Leer datos del formulario
server.use(express.json())

//routing
server.use("/api/products", router)

export default server;