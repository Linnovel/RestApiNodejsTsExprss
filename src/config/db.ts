import { Sequelize} from 'sequelize';
import dotenv from 'dotenv';

//llama a las varaibles de entorno
dotenv.config()


const db = new Sequelize(process.env.DATA_URL!);



export default db;