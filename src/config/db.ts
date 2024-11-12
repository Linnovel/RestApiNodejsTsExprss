import { Sequelize} from 'sequelize-typescript';
import dotenv from 'dotenv';

//llama a las varaibles de entorno
dotenv.config()


const db = new Sequelize(process.env.DATA_URL!, {
    models:[__dirname + '/../models/**/*.ts']
});



export default db;