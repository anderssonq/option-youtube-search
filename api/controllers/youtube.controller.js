require("dotenv").config();

exports.searchVideos = (req, res, next) => {
  // const { name, email, message } = req.body;
  res.status(500).json({
    message: "Hello world"
  });
};
