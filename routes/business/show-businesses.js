const express = require("express")
const mongoose = require("mongoose")
const checkAuth = require("../../middlewares/check-auth")
const checkCEO = require("../../middlewares/check-CEO")
const Business = mongoose.model("business")

const router = express.Router()
const baseEndpoint = "/api/business"
router.get(`${baseEndpoint}`, checkAuth, checkCEO, async (req, res) => {


    const bussinesDocuments = await Business.find({ ownerId: req.currentUser.id})
    
    res.send({bussinesDocuments})
})

module.exports=router;