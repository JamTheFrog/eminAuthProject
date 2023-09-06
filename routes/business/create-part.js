const express = require("express")
const mongoose = require("mongoose")

const router = express.Router()
const baseEndpoint = "/api/business"
router.post(`${baseEndpoint}/:id/parts`, async (req, res) => {


    res.send({})
})

module.exports=router;