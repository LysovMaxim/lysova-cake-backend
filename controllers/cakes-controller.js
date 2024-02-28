import cakesService from "../models/cakes.js";

import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
  const result = await cakesService.listCakes();
  res.json(result);
};

export default {
  getAll:ctrlWrapper(getAll),
};
