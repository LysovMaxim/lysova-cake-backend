import express from "express"

import cakesService from "../../models/cakes.js"

const cakesRouter = express.Router()

cakesRouter.get("/", async (req, res) => {
    const result = await cakesService.listCakes();
    res.json(result)
})

export default cakesRouter