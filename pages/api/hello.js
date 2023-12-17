// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs")

export default function handler(req, res) {
  //res.status(200).json({ name: 'John Doe' })
  console.log(req.query.sem);
    const file = fs.readFile(`kjdb/${req.query.sem}.json`,"utf8",(err,data)=>{
        const jsondata = JSON.parse(data);
        if(jsondata.show){
            res.status(200).json(JSON.parse(data).data)
        }else{
            res.status(200).json({status:500})
        }
    })
}
