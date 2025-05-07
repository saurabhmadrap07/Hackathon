const db = require("../utils/dbpool")
const {apiSuccess ,apiError} = require("../utils/apiresult")

const express = require("express")
const router = express.Router()

router.post("" ,(req,res)=>{
    const {author ,contents} = req.body
    const u_id = req.user.id.id
    db.query("insert into quote(author,contents,userId) values(?,?,?)",
        [author,contents,u_id],(err,result)=>{
            if(err)
                return res.send(apiError(err))
            if(result.affectedRows === 1){
                db.query("select * from quote where id = ?",
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

router.delete("/:id", (req, resp) => {
	db.query("DELETE FROM quote WHERE id=?", [req.params.id], (err, result) => {
		if (err) return resp.send(err);
		if (result.affectedRows === 1) resp.send(apiSuccess("quote deleted"));
		else resp.send(apiError("quote not found"));
	});
});

router.put("/:id", (req, resp) => {
	const {author ,contents} = req.body
	db.query(
		"UPDATE user SET author=?, content=? WHERE id=?",
		[author,contents , req.params.id],
		(err, result) => {
			if (err) return resp.send(apiError(err));
			resp.send(apiSuccess({ id: req.params.id, ...req.body }));
		}
	);
});

router.get("/" , (req,res) =>{
    db.query("select * from quote" ,(err,result) =>{
        if(err)
            return res.send(apiError(err))
        res.send(apiSuccess(result))
    })
})

module.exports = router