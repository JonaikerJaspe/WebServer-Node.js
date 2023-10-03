const http = require("http");

http
	.createServer((req, res) => {
		// res.writeHead(200, { "Content-Type": "application/json" });
		// res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
		// res.writeHead(200, { "Content-Type": "application/csv" });

		res.write("Hola Mundo");
		// res.write("1,  Jonaiker \n");
		// res.write("2,  Omar\n");
		// res.write("3,  Jaspe\n");
		// res.write("4,  Garcias\n");
		res.end();
	})
	.listen(8080);

console.log("Estas escuchando en el puerto:", 8080);
