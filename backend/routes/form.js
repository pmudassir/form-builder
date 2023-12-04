const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("hello")
})

router.post("/data", (req, res) => {
    try {
        const formData = req.body
        console.log(formData);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router