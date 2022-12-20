import express from "express";
const app = new express();
import dotenv from "dotenv";
import expressLayouts from "express-ejs-layouts";

// Config dotenv
dotenv.config();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Variables for the routes
import indexRoute from "./routes/index.js";
import aboutRoute from "./routes/about.js";
import articlesRoute from "./routes/articles.js";
import contactRoute from "./routes/contact.js";

// Setting the views of the application with EJS template engine
app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// Setting the static folder
app.use(express.static("public"));

// Using the routes of the application
app.use("/", indexRoute);
app.use("/about", aboutRoute);
app.use("/articles", articlesRoute);
app.use("/contact", contactRoute);

export default app;
