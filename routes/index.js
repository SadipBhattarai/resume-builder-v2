const router = require("express").Router();
const userRouter = require("../modules/users/user.route");

router.get("/", (req, res, next)=>{
    try {
        res.json({data: "API is working Properly"})
    } catch (error) {
        next(error)
    }
});

router.get("api/v1/user", userRouter);

module.exports= router;