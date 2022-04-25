const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema(
  {
    nom: { type: String, min: 2, max: 20 },
    prenom: { type: String,  min: 2, max: 20 },
    type: { type: String,  },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: { type: String,  min: 8 },
    telephone: { type: String,  min: 8 },
    residence: { type: String }
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", UserSchema);
