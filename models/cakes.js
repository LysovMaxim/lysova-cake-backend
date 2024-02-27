import fs from "fs/promises";
import path from "path";

const cakesPath = path.resolve("models", "cakes.json");

const listCakes = async () => { 
      const data = await fs.readFile(cakesPath);
    return JSON.parse(data);
}

export default {
  listCakes
}