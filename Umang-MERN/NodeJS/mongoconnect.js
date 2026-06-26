const { MongoClient } = require("mongodb");

const url = "mongodb+srv://umang:asdasd@cluster0.napmomp.mongodb.net/?appName=Cluster0";
const client = new MongoClient(url);
async function insertUser() {
    await client.connect();
    const db = client.db("test");
    // const users = db.collection("users");

    const users = await db.collection("users").find({ age: 25 }).toArray();
    console.log(users)
    // const result = await users.insertOne({ name: "Mary", age: 25 });
    // console.log(result);
    client.close();
}



insertUser()
