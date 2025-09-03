const express = require("express");
const router = express.Router();
const {
  submitContactForm,
  getAllContacts,
} = require("../controllers/contactController");

router.post("/", submitContactForm);
router.get("/", getAllContacts); // Optional: For admin panel to view contacts

module.exports = router;
