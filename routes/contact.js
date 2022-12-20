import { Router } from "express";
const router = new Router();

router.get("/", (req, res) => {
  res.send("Route for the contact page");
});

export default router;
