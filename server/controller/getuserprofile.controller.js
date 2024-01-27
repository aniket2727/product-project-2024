const userprofiledata = require('../database/schemaUserInfoforProfile');

const getuserprofiledata = async (req, resp) => {
    const { email } = req.body;
    try {
        const userProfileData = await userprofiledata.findOne({ email: email });

        if (userProfileData) {
            resp.status(200).json({ message: "User profile data retrieved successfully", userProfileData });
        } else {
            resp.status(404).json({ message: "User profile data not found", userProfileData: null });
        }
    } catch (error) {
        resp.status(500).json({ message: "Internal Server Error", error });
    }
};

module.exports = getuserprofiledata;
