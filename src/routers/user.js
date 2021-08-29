const express = require("express");
const router = new express.Router();
const User = require("../models/users");

// create user api
// router.post("/users", (req, res) => {
//   const user = new User(req.body);
//   user.save().then(() => {
//       res.status(201).send(user);
//     }).catch(e => {
//       res.send(e);
//     });
// });

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    console.log(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// reading user api
router.get("/users", async (req, res) => {
  try {
    const userData = await User.find();
    res.send(userData);
    console.log(userData);
  } catch (e) {
    res.send(e);
  }
});

// get indivisual user data using id
router.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await User.findById(_id);

    if (!userData) {
      return res.status(404).res.send();
    } else {
      res.send(userData);
      console.log(userData);
    }
    
  } catch (e) {
    res.send(e);
  }
});

// update user
router.patch("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateUser = await User.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.send(updateUser);
    console.log(updateUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

// delete user
router.delete("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteUser = await User.findByIdAndDelete(_id, req.body);
    
    if (!_id) {
      return res.status(404).send();
    } else {
      res.send(deleteUser);
      console.log(deleteUser);
    }

  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;