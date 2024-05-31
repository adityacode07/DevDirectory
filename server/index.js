const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const FriendModel=require('./models/Friends')

require('dotenv').config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL
).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("connected")
    })
})

app.post('/addfriend',async (req,res)=>{
    const name=req.body.name
    const resourcelink=req.body.resourcelink
    const description=req.body.description
    const imagelink=req.body.imagelink
    console.log(req.body)
    const friend=new FriendModel({name:name, resourcelink:resourcelink,description:description,imagelink:imagelink});
    await friend.save();
    res.send("data inserted")
})

app.get('/read', async (req, res) => {
    try {
        const friends = await FriendModel.find({});
        res.send(friends);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching friends"); // Handle errors gracefully
    }
});



