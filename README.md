This demo is for connecting to a database using an object and then
querying it.

A function called connectToDatabaseAndReturnRowsOfASpecificTable does the following 
- defines the database to connect to
- actually connects to that database
- queries the database 
- returns the result of its query 

The function is called in the route ./SeeResults so you will have to go to localhost:4000/seeResults to call that function

Environment variables are used to protect sensitive credentials


# Setup

- read the comments in the big function
- fill in the env.example file appropriately 
- remove the example part so that its just .env

# Run a demo

```
npm install
npm start 
```