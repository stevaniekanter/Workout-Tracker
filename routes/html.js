const router = require("express").Router();
const path = require("path");


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// route for exercise
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// route for starts
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;