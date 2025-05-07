const express = require("express")
const app = express()

const {jwtAuth} = require("./utils/jwtauth")
const userRouter = require("./routers/users")
//const movieRouter = require("./routers/movies")
//const reviewRouter = require("./routers/reviews")

app.use(express.json())
app.use(jwtAuth)
//app.use("/movies",movieRouter)
app.use("/users",userRouter)
//app.use("/reviews",reviewRouter)

const port = 4000
app.listen(port,"0.0.0.0",()=>{
    console.log("server is ready at port",port)
})