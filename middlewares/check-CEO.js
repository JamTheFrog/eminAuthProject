module.exports = (req, res, next) => {
  try {
    if (req.currentUser.role !== "CEO")
      return res.status(403).send("Not Authorized");
  } catch (error) {
    return res.status(error);
  }

  next();
};
