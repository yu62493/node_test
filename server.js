var http = require("http");

function start()
{
	function onRequest(request, response)
	{
		console.log("Requst received.");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello Tiny");
		response.end();
	}
	http.createServer(onRequest).listen(process.env.PORT,process.env.IP);
	console.log("Server has started.");
}

exports.start = start ;
