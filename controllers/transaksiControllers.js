import { db } from "../database.js"

export const TransaksiController = (req,res)=> {
    db.query(`select * from items`, (err,items)=> {
        if(err) console.log(err)
        db.query(`select * from pembukuan order by create_time desc limit 5`, (err,pembukuan)=>{
            if(err)
            console.log(err)
            res.render("store", {
            pembukuan : pembukuan || [],
            items : items || []
            })
        })
    })
}

export const tambahController = (req,res)=> {
    const data = req.body;

    db.query(`insert into items(name,Harga,status,Gambar) values(?,?,"Belum Ready",?)`,[data.name, data.Harga, data.Gambar], (err,result)=>{
        if(err)
        console.log(err)

        res.redirect('/store')
    })
}

export const transaksiController = (req,res) => {
    const data = req.body;

    db.query(`insert into pembukuan (name,type,item_id,amount) values ("admin",?,?,?)`, [data.type, data.item_id, data.amount],(err,result) =>{
    if(err) {
    console.log(err)
    res.redirect('/store')
    return
        }
        const qty = data.type === 'keluar' ? data.amount * -1 : data.amount;
        db.query(`update items set qty = qty + ? where id = ?`,[qty,data.item_id], (err,result)=> {
            if(err)
            console.log(err)
            res.redirect('/store')
        })
    })
}