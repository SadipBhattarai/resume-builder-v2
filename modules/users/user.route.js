const router = require("express").Router();
const userController = require("./user.controller");

router.post("/register", async (req, res, next) => {
    try {
        const result = await userController.register(req.body);
        res.json({ data: "User registerd Sucessfully" })
    } catch (error) {
        next(error)
    }
});

router.post("/login", async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
});
module.exports = router;