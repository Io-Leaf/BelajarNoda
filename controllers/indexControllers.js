import { db } from "../database.js"

// export const indexController = (req,res) => {
//     return db.query('select * from siswa', (err, result)=>{
//         if (err) throw err
//         return res.render('index', {siswa : result})
//     })
// }
export const indexController = (req,res) => {
    return res.render("index")
}
export const homeController = (req,res) => {
    return res.render("home")
}
export const aboutController = (req,res) => {
    return res.render("about")
}
export const login12Controller = (req,res) => {
    return res.render("login12")
}
export const profileController = (req,res) => {
    return db.query('select * from user', (err, result)=>{
        if (err) throw err
        return res.render('profile', {user : result})
    })
}

export const editController = (req,res) => {
    const id = req.params.id 
    return db.query(`select * from user where id = ${id}`, (err,result)=> {
        if (err) throw err
        return res.render('edit', {user : result[0]})
    })
}


