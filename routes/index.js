const router = require("express").Router();
const userRouter = require("../modules/users/user.route");

router.get("api/v1/user", userRouter);

module.exports= router;