require("dotenv").config();
const express = require("express");

const hbs = require("hbs");
const app = express();
const port = process.env.PORT;

//Handlebar
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir Contenido Estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", {
		nombre: "Jonaiker Jaspe",
		titulo: "Curso - Node.js",
	});
});
app.get("/generic", (req, res) => {
	res.render("generic", {
		nombre: "Jonaiker Jaspe",
		titulo: "Curso - Node.js",
	});
});
app.get("/elements", (req, res) => {
	res.render("elements", {
		nombre: "Jonaiker Jaspe",
		titulo: "Curso - Node.js",
	});
});

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
	console.log(`Escuchando desde el puerto http://Curso | Node.js:${port}`);
});
