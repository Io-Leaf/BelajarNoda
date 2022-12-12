import { db } from "../database.js";

export const beliController = (req,res) => {
    res.render("userTransaksi")
}

export const BuyingController = (req,res)=> {
    db.query(`select * from items`, (err,items)=> {
        if(err) console.log(err)
        db.query(`select * from pembukuan order by create_time desc limit 5`, (err,pembukuan)=>{
            if(err)
            console.log(err)
            res.render("userTransaksi", {
            pembukuan : pembukuan || [],
            items : items || []
            })
        })
    })
}

export const transaksi1Controller = (req,res) => {
    const data = req.body;

    db.query(`insert into pembukuan (name,type,item_id,amount) values (?,?,?,?)`, [data.name, data.type, data.item_id, data.amount],(err,result) =>{
    if(err) {
    console.log(err)
    res.redirect('/userTransaksi')
    return
        }
        const qty = data.type === 'dibeli' ? data.amount * -1 : data.amount;
        db.query(`update items set qty = qty + ? where id = ?`,[qty,data.item_id], (err,result)=> {
            if(err)
            console.log(err)
            res.redirect('/userTransaksi')
        })
    })
}

