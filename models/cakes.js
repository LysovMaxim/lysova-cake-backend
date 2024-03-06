import { Schema, model } from "mongoose"

const cakeSchema = new Schema({
    title: String,
    director:String
})

const Cake = model("cake", cakeSchema)

export default Cake