const db = require("../utils/dbpool")
const {apiSuccess ,apiError} = require("../utils/apiresult")

const express = require("express")
const router = express.Router()

const bcrypt = require("bcrypt")
const {createToken} = require("../utils/jwtauth")

router.post("/register" , (req,res) =>{
    const {firstname,lastname ,email,password,phoneno,address} = req.body
    //const encPassword = bcrypt.hashSync(password,10)

    db.query("insert into user(firstName,lastName,email,password,phoneno,address) values(?,?,?,?,?,?)" ,
        [firstname,lastname,email,password,phoneno,address],
        (err,result) =>{
            if(err)
                return res.send(apiError(err))
            if(result.affectedRows === 1){
                db.query("select * from user where id = ?" ,[result.insertId],
                    (err,result) =>{
                        if(err)
                            return res.send(apiError(err))
                        res.send(apiSuccess(result[0]))
                    }
                )
            }
        }
    )
})

router.post("/signin",(req,res)=>{
    const {email,password} = req.body
    db.query("select * from user where email=?",[email],
        (err,result) =>{
            if(err)
                return res.send(apiError(err))
            if(result.length !== 1)
                return res.send(apiError("invalid email"))
            const dbuser  = result[0]
            // const isMatching = bcrypt.compareSync(password,dbuser.password)
            // if(!isMatching)
            //     return res.send(apiError("invalid password"))
             const token = createToken(dbuser)
            res.send(apiSuccess({...dbuser , token}))
        }
    )
})

router.put("/:id" , (req,res) =>{
    const {firstname,lastname ,email,password,phoneno,address} = req.body
    //const encPassword = bcrypt.hashSync(password,10)

    db.query("update user set firstName=? , lastName=? , email=?,password=?,phoneno=?,address=? where user_id = ?" ,
        [firstname,lastname,email,password,phoneno,address] ,(err,result) =>{
            if(err)
                return res.send(apiError(err))
            res.send(apiSuccess({id : req.params.id , ...req.body}))
        }
    )
})

// router.patch("/changepassword" ,(req,res)=>{
//     const {id,password} = req.body
//     const encPassword = bcrypt.hashSync(password,10)
//     db.query("updated users set password=? where user_id=?" , [encPassword,id] ,(err,result) =>{
//         if(err)
//             return res.send(apiError(err))
//         if(result.affectedRows !== 1)
//             return res.send(apiError(err))
//         res.send(apiSuccess("user password updated"))
//     })
// })

module.exports = router