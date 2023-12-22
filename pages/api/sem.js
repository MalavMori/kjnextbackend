export default async function handler(req, res) {
    try{
        
        const sendreq = await fetch(`https://malavmori.github.io/jsonapi/kjdb/${req.query.data}.json`)
        const data = await sendreq.json()
        if (data.show) {
            res.status(200).json(data)
        }else{
            res.status(500).json({data:false})
        }

    }catch{
        res.status(500).json({data:false})
    }

  }
  
