const sem3data = {
    
    show: true,
    data:[
        {
            title:"study material",
            data:[
                {
                    title:"SLP U-1",
                    src:"unit-1-1.pdf"
                },
                {
                    title:"DSA U-1",
                    src:"unit-1-2.pdf"
                },
                {
                    title:"SLP U-1",
                    src:"unit-1-1.pdf"
                },
                {
                    title:"SLP U-1",
                    src:"unit-1-1.pdf"
                }
                
            ]
        },
        {
            title:"IMP",
            data:[
                {
                    title:"IMP questions RDBMS",
                    src:"important-questions-rdbms.pdf"
                }
                
            ]
        }
    ]

}
export default function handler(req, res) {
    if (sem3data.show) {
        res.status(200).json(sem3data.data)
    }else{
        res.status(200).json({data:false})
    }
  }
  
