const express = require("express");
const bodyParser = require("body-parser");
const controllers = require("./controller.js");
const massive = require("massive");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../build`));

const port = 4000;

massive(process.env.CONNECTION_STRING).then(function(db) {
    console.log('db connected')
    app.set("db", db);
}).catch(error => {
    console.log(`ERROR: ${error}`);
})


app.get("/api/inventory", controllers.getProducts);

app.post("/api/product", controllers.createProduct);

app.delete("/api/product/:id", controllers.deleteProduct);

app.put("/api/product/:id", controllers.editProduct);

app.get("/api/inventory/:id", controllers.getProduct);



app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})