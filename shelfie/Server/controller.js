module.exports = {
    getProducts: (req,res) => {
        req.app.get("db").get_inventory().then(response => res.status(200).send(response))
        .catch(error => {
            console.log(`ERR: ${error}`);
            res.status(500).send(error);
        })
    },
    getProduct: (req,res) => {
        req.app.get("db").get_product(req.params.id).then(response => res.status(200).send(response))
        .catch(error => {
            console.log(`ERR: ${error}`);
            res.status(500).send(error);
        })
    },
    createProduct: (req,res) => {
        const {image, productName, price} = req.body;
        req.app.get("db").create_product([image, productName, price]).then(response => res.status(200).send())
        .catch(error => {
            console.log(error);
            res.status(500).send(error);
        })
    },
    deleteProduct: (req,res) => {
        const {id} = req.params;
        req.app.get("db").delete_product(id).then(response => res.status(200).send())
        .catch(error => {
            console.log(`ERR: ${error}`);
            res.status(500).send(error);
        })
    },
    editProduct: (req,res) => {
        const {id} = req.params;
        const {image, productName, price} = req.body;
        req.app.get("db").edit_product([id, image, productName, price]).then(response => res.status(200).send())
        .catch(error => {
            console.log(`ERR: ${error}`);
            res.status(500).send(error);
        })
    }
}