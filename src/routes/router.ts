import {Router} from 'express'
import { createProduct } from '../handlers/product'


//Routing
const router = Router()

//GET 
router.get("/",(req, res) => {
    res.json('DESDE GET')
})

//POST
router.post("/", createProduct)

//PUST
router.put("/",(req, res) => {
    res.json('DESDE PUT')
})

//PATCH
router.patch("/",(req, res) => {
    res.json('DESDE PATCH')
})

//DELETE
router.delete("/",(req, res) => {
    res.json('DESDE DELETE')
})

export default router;
