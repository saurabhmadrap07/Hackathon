const db = require("../utils/dbpool")
const {apiSuccess ,apiError} = require("../utils/apiresult")

const express = require("express")
const router = express.Router()

router.post("" ,(req,res)=>{
    const {quoteId} = req.body
    const u_id = req.user.id.id
    db.query("insert into favourite(quoteId , userId) values(?,?)",
        [quoteId,u_id],(err,result)=>{
            if(err)
                return res.send(apiError(err))
            if(result.affectedRows === 1){
                db.query("select * from favourite where id = ?",
                [result.insertId] ,(err,result)=>{
                        if(err)
                            return res.send(apiError(err))
                        res.send(apiSuccess(result[0]))
                }
            )
            }
        }
    )
})

module.exports = router