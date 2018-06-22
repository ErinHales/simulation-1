UPDATE Products
SET image = $2, productname = $3, price = $4
WHERE productid = $1;