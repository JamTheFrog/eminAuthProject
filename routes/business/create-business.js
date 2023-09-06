const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const keys = require("../../keys/keys");
const Business = mongoose.model("business");

const router = express.Router();
const baseEndpoint = "/api/business";
router.post(`${baseEndpoint}`, async (req, res) => {
    const {name} = req.body
  if(!req.currentUser) return res.status(401).send({msg: "Not Authenticated"})
  if(req.currentUser.role !== "CEO") return res.status(403).send({msg: "Not Authorized"})
  const businessDoc = await Business.create({name, ownerId: req.currentUser.id, parts: []})
  res.send(businessDoc);
});

module.exports = router;
