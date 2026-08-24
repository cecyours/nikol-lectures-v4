var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/auth');
const user = require('../model/user');

/* GET users listing. */
router.get("/profile", authMiddleware, async (req, res) => {
  try {



    const userData = await user.findById(req.user.userId)
      .select("-password");

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User profile",
      user: {
        id: userData._id,
        name: userData.name,
        email: userData.email,
        role: userData.role,
      },
    });

  } catch (error) {

    console.error("Profile Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });

  }
});




router.get("/", async (req, res) => {
  try {
    const data = await user.find()
    res.json(data)

  } catch (error) {

    console.error("Profile Error:", error);


  }
});

module.exports = router;
