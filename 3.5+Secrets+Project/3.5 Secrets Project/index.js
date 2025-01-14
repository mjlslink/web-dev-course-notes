import express from 'express'
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised=false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("combined"));

function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
      userIsAuthorised = true;
    }
    next();
  }

  app.use(passwordCheck);

//ILoveProgramming
app.get("/", (req, res)=>{
    console.log(req.body);
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check", (req,res) => {
    if(userIsAuthorised){
        res.sendFile(__dirname+"/public/secret.html")
    } else {
        res.sendFile(__dirname+"/public/index.html");
        console.log(req.body);
    }
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });