import {Router} from 'express'
import { createProduct, getProducsts, getProducstsById, updateAvailability, updateProduct } from '../handlers/product'
import {body, param} from 'express-validator'
import { handleInputErrors } from '../middlewares'


//Routing
const router = Router()

//GET 
router.get("/", getProducsts)

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
    body('name').notEmpty().withMessage('Nombre del producto no puede estar vacio'),
    body('price').isNumeric().withMessage('Valor no valido').notEmpty().withMessage('El precio no puede estar vacio').custom(value => value > 0).withMessage('Precio no valido'),
    body('Availability').isBoolean().withMessage('Valor para disponibilidad no valido'),
    handleInputErrors,
    updateProduct
)

//diferencias entre put y patch
/**
 * ACTUALIZA O REEMPLAZA COMPLETAMENTE EL RECURSO EXISTENTE (DESTRUCTIVO) ACTUALIZA COMPLETAMENTE
 * PATCH REEMPLAZA SOLO EL ELEMENTO QUE LE ESTOY ENVIANDO (MENOS DESTRUCTIVO) MODIFICA SOLO LO QUE LE ENVIEMOS
*/

//PATCH
router.patch("/", updateAvailability)

//DELETE
router.delete("/",(req, res) => {
    res.json('DESDE DELETE')
})

export default router;
