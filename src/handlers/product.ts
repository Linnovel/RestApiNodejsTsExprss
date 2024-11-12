import {Request, Response} from 'express'
import {check, validationResult} from 'express-validator'
import Product from '../models/Product.model'

export const createProduct = async (req : Request, res : Response): Promise<void>=> {
    await check('name').notEmpty().withMessage('Nombre del producto no puede estar vacio').run(req);
    await check('price').isNumeric().withMessage('Valor no valido').notEmpty().withMessage('El precio no puede estar vacio').custom(value => value > 0).withMessage('Precio no valido').run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return ;
    }

    const product = await Product.create(req.body);
    res.json({ data: product });
};

