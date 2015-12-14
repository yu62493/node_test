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
;	http.createServer(onRequest).listen(process.env.PORT,process.env.IP);
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start ;
