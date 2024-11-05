import {Router} from 'express'


//Routing
const router = Router()

//GET 
router.get("/",(req, res) => {
    res.json('DESDE GET')
})

//POST
router.post("/",(req, res) => {
    res.json('DESDE POST')
})

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
