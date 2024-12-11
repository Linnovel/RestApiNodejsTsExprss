import {Router} from 'express'
import { createProduct, deletedProduct, getProducsts, getProducstsById, updateAvailability, updateProduct } from '../handlers/product'
import {body, param} from 'express-validator'
import { handleInputErrors } from '../middlewares'


//Routing
const router = Router()

//GET 
router.get("/", getProducsts)
//Get product by id
router.get("/:id", 
    param('id').isInt().withMessage('ID no es valido'),
    handleInputErrors,
    getProducstsById
)

//POST
router.post("/",
    //validacion de los endpoint
    body('name').notEmpty().withMessage('Nombre del producto no puede estar vacio'),
    body('price').isNumeric().withMessage('Valor no valido').notEmpty().withMessage('El precio no puede estar vacio').custom(value => value > 0).withMessage('Precio no valido'),
    handleInputErrors,
    createProduct
)

//PUT
//Realiza modificaciones totales a la base de datos
router.put("/:id",
    //validacion de los endpoint
    param('id').isInt().withMessage('ID no es valido'),
    body('name').notEmpty().withMessage('Nombre del producto no puede estar vacio'),
    body('price').isNumeric().withMessage('Valor no valido').notEmpty().withMessage('El precio no puede estar vacio').custom(value => value > 0).withMessage('Precio no valido'),
    body('availability').isBoolean().withMessage('Valor para disponibilidad no valido'),
    handleInputErrors,
    updateProduct
)

//diferencias entre put y patch
/**
 * 
 *  PUT ACTUALIZA O REEMPLAZA COMPLETAMENTE EL RECURSO EXISTENTE (DESTRUCTIVO) ACTUALIZA COMPLETAMENTE
 * PATCH REEMPLAZA SOLO EL ELEMENTO QUE LE ESTOY ENVIANDO (MENOS DESTRUCTIVO) MODIFICA SOLO LO QUE LE ENVIEMOS
*/

//PATCH
//
router.patch("/:id", 
    param('id').isInt().withMessage('ID no es valido'),
    handleInputErrors,
    updateAvailability)

//DELETE
router.delete("/:id", 
    param('id').isInt().withMessage('ID no es valido'),
    handleInputErrors,
    deletedProduct

)

export default router;
