const express = require("express")
const app = express()

const {jwtAuth} = require("./utils/jwtauth")
const userRouter = require("./routers/users")
const quoteRouter = require("./routers/quotes")
const favRouter = require("./routers/favourite")

const cors = require("cors");
app.use(cors());

app.use(express.json())
app.use(jwtAuth)
app.use("/quotes",quoteRouter)
app.use("/users",userRouter)
app.use("/favourites",favRouter)

const port = 4000
app.listen(port,"0.0.0.0",()=>{
    console.log("server is ready at port",port)
})