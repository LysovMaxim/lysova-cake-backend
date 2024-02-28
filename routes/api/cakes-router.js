import express from "express";

import cakesController from "../../controllers/cakes-controller.js";

const cakesRouter = express.Router();

cakesRouter.get("/",cakesController.getAll);

export default cakesRouter;
