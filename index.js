let http = require("http");
let fs = require("fs");

const getFile = (name, res) => {
	fs.readFile(name, (err, data) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
};
http
	.createServer((req, res) => {
		const url = req.url;
		switch (url) {
			case "/": {
				return getFile("index.html", res);
			}
			case "/about": {
				return getFile("about.html", res);
			}
			case "/contact-me": {
				return getFile("contact-me.html", res);
			}
			default: {
				return getFile("404.html", res);
			}
		}
	})
	.listen(8080);
