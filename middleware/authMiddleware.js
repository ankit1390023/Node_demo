const authMiddleWare = (req,res,next) => {
    console.log("Authentication successfull");
    next();
}
module.exports = authMiddleWare;