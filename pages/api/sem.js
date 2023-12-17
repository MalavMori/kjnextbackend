import * as fs from "fs";
export default function handler(req, res) {
    console.log(req.query.sem);
    fs.readFile(`kjdb/${req.query.sem}.json`,"utf8",(err,data)=>{
        const jsondata = JSON.parse(data);
        if(jsondata.show){
            res.status(200).json(JSON.parse(data).data)
        }else{
            res.status(200).json({status:500})
        }
    })
  }
  
