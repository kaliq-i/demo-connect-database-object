const express = require("express");
const { Client } = require("pg")
const dotenv = require('dotenv')

// if I dont do this then process.env.PICKANYIWROTEINTHEDOTENVFILE will always be undefined
dotenv.config()

const connectToDatabaseAndReturnRowsOfASpecificTable = async () => {
    //below I am defining the database I want to connect to
    // and assigning it to the variable client
    // you can find the information to fill in each key
    // in postico
    // on the screen with the elephant on the left
    // click on edit instead of connect at the beginning
    // and you should see the details
    // if you cant and you're already in postico
    // go full screen, the find the file tab and click on close
    // you should see the elephant on the left 

    const client = new Client({
        user: process.env.LOCAL_USER,
        host: process.env.LOCAL_HOST,
        database: process.env.DATABASE,
        password: process.env.LOCAL_PASSWORD,
        port: process.env.LOCAL_PORT,
    });

    //here I am actually connecting to the database 
    await client.connect();
    
    //here I am querying the database using an SQL command
    const res = await client.query(`SELECT * FROM ${process.env.TABLE}`);

    // here I am returning the rows from the table artists
    // (because my env variable for table is artists) 
    return res.rows;
};

// express app initialised
const app = express();

// route for localhost:4000/seeResults
app.get("/seeResults", async (req, res) => {

    // the rows in the table called artists from the database called musicbase are returned
    const result = await connectToDatabaseAndReturnRowsOfASpecificTable();

    // we serve this to the client = i.e if you go to 
    // localhost:4000/seeResults - you will see an array of objects
    // each object is a row
    res.json(result);
});

// server is listening for requests 
app.listen(4000, () => {
    console.log("App is running on local host 4000")
});
