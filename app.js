
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", engine({
	defaultLayout: "",
	layoutsDir: path.join(app.get("views"), "layouts"),
	partialsDir: path.join(app.get("views"), "partials"),
	extname: ".hbs",
})
);
app.set("view engine", "hbs");
//Servir Contenido Estatico
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("home", {
		nombre: "Jonaiker Jaspe",
		titulo: "Curso - Node.js",
	});
});
// app.get("/generic", (req, res) => {
// 	res.render("generic", {
// 		nombre: "Jonaiker Jaspe",
// 		titulo: "Curso - Node.js",
// 	});
// });
// app.get("/elements", (req, res) => {
// 	res.render("elements", {
// 		nombre: "Jonaiker Jaspe",
// 		titulo: "Curso - Node.js",
// 	});
// });

// app.get("*", (req, res) => {
// 	res.sendFile(__dirname + "/public/404.html");
// });

app.listen(port, () => {
	console.log(`Escuchando desde el puerto http://localhost ${port}`);
});
