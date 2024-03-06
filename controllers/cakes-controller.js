import Cake from "../models/cakes.js";

import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
  const result = await Cake.find();
  res.json(result);
};

export default {
  getAll:ctrlWrapper(getAll),
};
