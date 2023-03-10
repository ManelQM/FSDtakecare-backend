const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const {adminPrivileges , isValidUser} = require("../services/AuthServices")
const {
  getAllUsers,
  destroyUser,
  getMyProfile,
  updateUser,
  userRegister,
} = require("../controllers/UsersController");

// Admin access privileges

router.get("/all", getAllUsers); 
router.delete("/delete/:id",authMiddleware, destroyUser);

//User access privileges

router.get("/profile/:email", authMiddleware, getMyProfile);
router.patch("/update/:id",authMiddleware, updateUser);
router.post("/register", userRegister);

module.exports = router;
