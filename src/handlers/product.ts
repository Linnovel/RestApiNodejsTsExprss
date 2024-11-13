import {Request, Response} from 'express'
import Product from '../models/Product.model'


//funcionalidades de los endpoints  crear los productos
export const getProducsts =  async (req: Request, res: Response) => {
           try {
            //para llamar todos los productos
            const products = await Product.findAll({
                attributes: {exclude: ['createdAt', 'updatedAt', 'availability']}
            });
            res.json({data: products})
           } catch (error) {
            console.log(error)
           }
}
//CREATE PRODUCT MIDDLEWARE
export const createProduct = async (req : Request, res : Response): Promise<void>=> {
    try {
        const product = await Product.create(req.body);
        res.json({ data: product })
    } catch (error) {
        console.log(error)
    }
};

//GET PRODUCT
export const getProducstsById =  async (req: Request, res: Response): Promise<void> => {
    try {
    // console.log(req.params.id)
    const {id} = req.params
    const product = await Product.findByPk(id)
    if(!product){
         res.status(404).json({error: 'Producto no encontrado'})
    } else {
        res.json({data : product})
    }
    } catch (error) {
     console.log(error)
    }
}


//Update product

export const updateProduct = async (req: Request, res: Response): Promise<void> => {

        // console.log(req.params.id)
        const {id} = req.params
        const product = await Product.findByPk(id)
        if(!product){
             res.status(404).json({error: 'Producto no encontrado'})
        } else {
            res.json({data : product})
        }

        //Actualizar
        
        await product.update(req.body)
        await product.save()
        console.log(req.body)

}


export const updateAvailability = async (req: Request, res: Response):Promise<void> => {

    // console.log(req.params.id)
    //conseguir primero el Id
    const {id} = req.params
    const product = await Product.findByPk(id)
    if(!product){
         res.status(404).json({error: 'Producto no encontrado'})
    } 

    //Actualizar
    product.availability = req.body.availability
    await product.save()
    console.log(product.dataValues)
    res.json({data : product})

}