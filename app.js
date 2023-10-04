require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");

const hbs = require("hbs");
const port = process.env.PORT;

hbs.path.join(__dirname, "views", "partials");
app.set("view engine", "hbs");

//Servir Contenido Estatico
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("home.hbs", {
		nombre: "Jonaiker Jaspe",
		titulo: "Curso - Node.js",
	});
});
app.get("/generic", (req, res) => {
	res.render("generic.hbs", {
		nombre: "Jonaiker Jaspe",
		titulo: "Curso - Node.js",
	});
});
app.get("/elements", (req, res) => {
	res.render("elements.hbs", {
		nombre: "Jonaiker Jaspe",
		titulo: "Curso - Node.js",
	});
});

// app.get("*", (req, res) => {
// 	res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
	console.log(`Escuchando desde el puerto http://localhost ${port}`);
});
