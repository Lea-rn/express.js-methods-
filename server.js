const express = require("express");

const app = express();

const logger = require("morgan");
const studentRouter = require("./routes/studentRoutes");
app.use(logger("combined"));
app.use(express.urlencoded({ extended: false }));

app.use("/student", studentRouter);

app.listen(4000, () => console.log("server run on port 4000"));

/////// crud ===> c:create (post) ; r:read (get) ; u : update (put/patch) ; d : delete

// const result = x => console.log(x) ;
// const result1 = (x,y) => console.log(x) ;
// const result3 = (name , bearthYear)=>{
//   /////////
//   ////////
//   return result
// }
