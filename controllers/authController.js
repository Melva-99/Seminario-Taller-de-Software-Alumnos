import con from '../database/connection.js'

//CARRERAS
export const agregarCarrera = (req, res) => {
    const { nombreCarrera, numeroClases } = req.body

    const data = {
        nombreCarrera: nombreCarrera, 
        numeroClases: numeroClases,
    }

    con.query('INSERT INTO carreras SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            //console.log(err);
            return
        }
        res.redirect('/carreras')
    })
}

export const eliminar = (req, res) => {
    const { idCarrera } = req.body
    
    con.query('DELETE FROM carreras WHERE idCarrera=?',idCarrera, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al eliminar el registro')
            console.log(err);
            return
        }
        res.redirect('/carreras')
    })
}

export const mostrar = (req, res, next) => {

    const { q } = req.query ?  req.query : ""
    //console.log(req.query);
    if(q){
        //console.log(q);
        con.query('SELECT * FROM carreras WHERE idCarrera = ?',[q], (err, result) => {
            if (err) {
                console.log('Ocurrio un error al mostrar la información de carreras')
                console.log(err);
                return
            }
            req.actualizar = result[0]
            req.q = q
        })
    }

    con.query('SELECT * FROM carreras', (err, result) => {
        if (err) {
            console.log('Ocurrio un error al mostrar la información')
            //console.log(err);
            return
        }
        req.carreras = result
        next()
    })
}

export const actualizarCarreras = (req, res, next) => {
    const { idCarrera, nombreCarrera, numeroClases } = req.body

    const data = {
        nombreCarrera:nombreCarrera,
        numeroClases:numeroClases,
    }
    con.query('UPDATE carreras SET ? WHERE idCarrera = ?',[data, idCarrera], (err, result) => {
        if (err) {
            console.log('Ocurrio un error al actualizar el registro')
            //console.log(err);
            return
        }
        res.redirect('/carreras')
    })
}

//ALUMNOS
export const agregarAlumno = (req, res) => {
    const {  nombres,apellidos,celular,sexo,email, fkCarrera } = req.body
    
    const data = {
        nombres:nombres,
        apellidos:apellidos,
        celular:celular,
        sexo:sexo,
        email:email, 
        fkCarrera:fkCarrera
    }

    con.query('INSERT INTO alumnos SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el registro')
            console.log(err);
            return
        }
        res.redirect('/alumnos')
    })
}

export const eliminarAlumno = (req, res) => {
    const { idAlumno } = req.body
    const data = {
        idAlumno:idAlumno
    }
    con.query('DELETE FROM alumnos WHERE ?',data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al eliminar el registro')
            //console.log(err);
            return
        }
        res.redirect('/alumnos')
    })
}

export const mostrarAlumnos = (req, res, next) => {

    const { q } = req.query ?  req.query : ""
    //console.log(req.query);
    if(q){
        //console.log(q);
        con.query('SELECT idAlumno,nombres,apellidos,celular,sexo,email,nombreCarrera, fkCarrera FROM alumnos a INNER JOIN carreras c ON a.fkCarrera = c.idCarrera WHERE idAlumno = ?',[q], (err, result) => {
            if (err) {
                console.log('Ocurrio un error al mostrar la información de alumnos')
                console.log(err);
                return
            }
            req.actualizar = result[0]
            req.q = q
        })
    }

    con.query('SELECT idAlumno,nombres,apellidos,celular,sexo,email,nombreCarrera FROM alumnos a INNER JOIN carreras c ON a.fkCarrera = c.idCarrera', (err, result) => {
        if (err) {
            console.log('Ocurrio un error al mostrar la información')
            //console.log(err);
            return
        }
        req.alumnos = result
    })

    con.query('SELECT * FROM carreras', (err, result) => {
        if (err) {
            console.log('Ocurrio un error al mostrar la información')
            //console.log(err);
            return
        }
        req.carreras = result
        next()
    })
}

export const actualizarAlumnos = (req, res, next) => {
    const { idAlumno, nombres,apellidos,celular,sexo,email, fkCarrera } = req.body

    const data = {
        nombres:nombres,
        apellidos:apellidos,
        celular:celular,
        sexo:sexo,
        email:email, 
        fkCarrera:fkCarrera
    }
    con.query('UPDATE alumnos SET ? WHERE idAlumno = ?',[data, idAlumno], (err, result) => {
        if (err) {
            console.log('Ocurrió un error al actualizar el registro')
            //console.log(err);
            return
        }
        res.redirect('/alumnos')
    })
}
