import Cake from "../models/cakes.js";

import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Cake.find(null, null, { skip, limit });
  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
};
