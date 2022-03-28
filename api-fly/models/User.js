const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema(
  {
    nom: { type: String, required: true, min: 2, max: 20 },
    prenom: { type: String, required: true, min: 2, max: 20 },
    type: { type: String, required: true, },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: { type: String, required: true, min: 8 },
    residence: { type: String, required: true}
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);
