const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
	const url="mongodb+srv://tulsirchoudhari24:IMU1JRMMeOtGQgc4@cluster0.uhesolf.mongodb.net/?retryWrites=true&w=majority";
	const client=new MongoClient(url);
	const db=client.db("ss_29dec23");
	const coll=db.collection("student");
	const doc={"name":req.body.name,"company":req.body.company,"pkg":req.body.pkg};

	coll.insertOne(doc)
	.then(result=>res.send(result))
	.catch(error=>res.send(error));
});
app.listen(9001,()=>{console.log("Server Ready @ 9001");});
