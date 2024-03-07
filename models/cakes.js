import { Schema, model } from "mongoose";

import { handleSaveError } from "./hooks.js";

const cakeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

cakeSchema.post("save", handleSaveError);

const Cake = model("cake", cakeSchema);

export default Cake;
