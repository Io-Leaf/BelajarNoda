import { db } from "../database.js";

export const submitController = (req,res) => {
//    res.render("submit")
  
//    console.log(req.body)
   const namaa = req.body.Nama;
   const statuss = req.body.sts;
   const pass = req.body.pss;

   db.query(`insert into siswa (nama, status, Password) values ('${namaa}','${statuss}','${pass}')`)
   res.redirect('/home')
}

// export const updateController = (req,res) => {
//    const id = req.params.id

//    db.query(`update user set status = "aktif" where id = ${id}`)
//    res.redirect('/profile')
// }

export const deleteController = (req,res)=> {
   const id = req.params.id

   db.query(`delete from user where id = ${id}`)
   res.redirect('/profile')
}

export const deletestokController = (req,res)=> {
   const id = req.params.id

   db.query(`delete from items where id = ${id}`)
   res.redirect('/store')
}

export const updatestatusController = (req,res)=> {
   const id = req.params.id

   db.query(`update items set status = "Ready" where id = ${id}`)
   res.redirect('/store')
}

export const updatestatus1Controller = (req,res)=> {
   const id = req.params.id

   db.query(`update items set status = "Belum Ready" where id = ${id}`)
   res.redirect('/store')
}

export const deletehistoryController = (req,res)=> {
   const id = req.params.id

   db.query(`delete from pembukuan where id = ${id}`)
   res.redirect('/store')
}

export const edittController = (req,res)=> {
   const id = req.params.id
   const data = req.body
   console.log(data)

   db.query(`update user set nama = "${data.nama}", email = "${data.email}", password = "${data.password}" where id = ${id}`)
   res.redirect('/profile')
}