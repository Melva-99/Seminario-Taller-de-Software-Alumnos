import express from 'express'
import { actualizarAlumnos, actualizarCarreras, agregarAlumno, agregarCarrera, eliminar, eliminarAlumno, mostrar, mostrarAlumnos, } from '../controllers/authController.js'

const router = express.Router()

// rutas para las vistas
router.get('/', mostrar, (req, res) => {
    res.render('inicio')
})
router.get('/carreras', mostrar, (req, res) => {
    res.render('carreras', {carreras: req.carreras, actualizar: req.actualizar, q:req.q})
})
router.get('/alumnos', mostrarAlumnos, (req, res) => {
    res.render('alumnos', {carreras:req.carreras, alumnos:req.alumnos, actualizar:req.actualizar, q:req.q})
})

// rutas para los controllers
//CARRERAS
router.post('/agregarCarrera', agregarCarrera)
router.post('/eliminar', eliminar)
router.post('/actualizarCarreras', actualizarCarreras)
//ALUMNOS
router.post('/agregarAlumno', agregarAlumno)
router.post('/eliminarAlumno', eliminarAlumno)
router.post('/actualizarAlumnos', actualizarAlumnos)


export default router