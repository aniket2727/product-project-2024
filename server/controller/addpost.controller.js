const addPost = require('../database/schemaAddpost');

const addPostController = async (req, resp) => {
    const { postimage, postcaption } = req.body;
    
    try {
        const addPostUser = new addPost({
            postimage,
            postcaption
        });

        const postAddResult = await addPostUser.save();

        resp.status(201).json({ message: "Successfully added post into database", postAddResult });
    } catch (error) {
        resp.status(400).json({ message: error.message });
    }
};

module.exports = addPostController;
