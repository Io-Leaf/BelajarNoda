// common js

// const express = require("express");
// const app = express();

// app.get("/",function(req,res){
//     res.send("hello world")
// })

// app.listen(3000, function(){
//     console.log("app berjalan dengan baik")
// })

// module 

import express, { urlencoded } from 'express';
import {editController, homeController, indexController, login12Controller, profileController} from './controllers/indexControllers.js';
import { deleteController, deletehistoryController, deletestokController, edittController, submitController, updatestatus1Controller, updatestatusController } from './controllers/submitController.js';
import { adminController, cekuserController, dbAdminController, dbLoginController, dbRegistrasiController, loginController, logoutController, RegistrasiController } from './controllers/userController.js';
import session from 'express-session';
import { tambahController, transaksiController, TransaksiController } from './controllers/transaksiControllers.js';
import { beliController, BuyingController, transaksi1Controller } from './controllers/buyingControllers.js';

const app = express();

app.use(urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express.static('views/img'))
app.use(session({
    secret: 'inikuncirahasia'
}))

app.set("view engine", "ejs");
app.get("/index", adminController);
app.post("/index", dbAdminController)
app.get("/home", cekuserController, homeController);
app.get("/profile", cekuserController, profileController);
app.get("/store",TransaksiController);
app.get("/userTransaksi",  BuyingController, beliController)
app.post("/submit", submitController);
// app.get("/update/:id", updateController);
app.get("/delete/:id", deleteController);
app.get("/edit/:id", editController);
// app.get("/edit/:id", edittController);
app.post("/edit/:id", edittController);
app.get("/registrasi", RegistrasiController);
app.post("/registrasi", dbRegistrasiController);

app.get("/login12", login12Controller)
app.get("/login", loginController);
app.post("/login", dbLoginController);

app.get("/logout", logoutController)

app.post("/items/tambah",tambahController)
app.post("/items/transaksi",transaksiController)
app.post("/items/beli", transaksi1Controller)

app.get('/deleteStok/:id', deletestokController)
app.get('/deleteHistory/:id', deletehistoryController)
app.get('/updateStatus/:id', updatestatusController)
app.get('/updateStatus1/:id', updatestatus1Controller)
// app.get('/deleteRiwayat/:id',)

app.listen(3000,function(){
    console.log("app berjalan")
})

