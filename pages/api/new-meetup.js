import { MongoClient } from "mongodb"

const handler =async (req,res) =>{
    if(req.method==='POST'){
        const data = req.body
        const {title,image,address,descroption} = data
        const client = await MongoClient.connect(process.env.DB_URI)
        const db = client.db()

        const meetupCollection = db.collection('meetups')
        const result = await meetupCollection.insertOne(data)
        console.log('result--->',result)

        client.close()
        res.status(201).json({
            massage:'New meetup data added to DB'
        })
    }
}

export default handler