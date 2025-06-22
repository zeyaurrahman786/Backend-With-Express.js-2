const userController = (req, res) => {
    const username = req.params.username;
    res.send(`Welcome ${username}`);
}


const searchController = (req, res) => {
    const product = req.query.product;
    res.send(`You searched for: ${product}`);
}


module.exports = {userController, searchController};