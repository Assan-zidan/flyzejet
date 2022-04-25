const bcrypt = require('bcrypt')
const User = require('../models/User')

//update profile
exports.UpdateProfile = async (req, res) => {
   if (req.body.userId === req.params.id) {
      if (req.body.password) {
         try {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
         } catch (err) {
            return res.status(500).json(err)
         }
      }
      try {
         await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
         })
         res.status(200).json('le compte a bien été mis à jour')
      } catch (err) {
         return res.status(500).json(err)
      }
   } else {
      return res
         .status(403)
         .json('Vous ne pouvez pas mettre à jour un autre compte!')
   }
}

//delete profile
exports.delProfile = async (req, res) => {
   if (req.body.id === req.params.id) {
      try {
         await User.findByIdAndDelete(req.params.id)
         res.status(200).json('Votre compte a bien été supprimé')
      } catch (err) {
         return res.status(500).json(err)
      }
   } else {
      return res
         .status(403)
         .json('Vous ne pouvez pas supprimer un autre compte!!')
   }
}

//get a profiles
exports.getProfile = (req, res) => {
   try {
      User.findById(req.headers.id)
         .then((user) => {
            const { password, updatedAt, cniPicture, cartePicture, ...other } =
               user._doc
            res.status(200).json(other)
         })
         .catch((err) =>
            res.status(401).json({ message: 'Utilisateur inexistant' })
         )
   } catch (err) {
      return res.status(500).json(err)
   }
}
