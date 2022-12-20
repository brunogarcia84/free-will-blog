import { Router } from "express";
const router = new Router();

// Route for the root of the application
router.get("/", (req, res) => {
  res.send("Home Page");
});

export default router;
