import { promises as fs } from 'fs';
export default async function handler(req, res) {
    console.log(req.query.sem);
     const file = await fs.readFile(process.cwd() + `/kjdb/${req.query.sem}.json`, 'utf8',(err,data)=>{
        const jsondata = JSON.parse(data);
        if(jsondata.show){
            res.status(200).json(JSON.parse(data).data)
        }else{
            res.status(200).json({status:500})
        }
    });
    
  }
  
