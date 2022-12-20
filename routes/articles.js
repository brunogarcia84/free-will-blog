import { Router } from "express";
const router = new Router();

// Getting all articles from the blog
router.get("/", (req, res) => {
  res.send("Articles Page");
});

// Creating a new article
router.post("/new", (req, res) => {
  res.send("Page for creating a new article");
});

// Updating an article - STILL NEEDS TO INCLUDE THE OPTION FOR SELECTING AN ID
router.put("/update", (req, res) => {
  res.send("Page for updating an article");
});

// Deleting an article - STILL NEEDS TO INCLUDE THE OPTION FOR SELECTING AN ID
router.delete("/delete", (req, res) => {
  res.send("Page for deleting an article");
});

export default router;
