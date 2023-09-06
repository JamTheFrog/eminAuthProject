module.exports = (req, res, next) => {
  try {
    if(!req.currentUser) return res.status(401).send("Not Authenticated")
  } catch (error) {
    return res.status(error)
  }

  next();
};