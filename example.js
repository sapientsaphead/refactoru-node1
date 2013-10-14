var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	// res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end('Hello World\n');

 //  	var myData = fs.readFileSync(__dirname + '/data.txt');
	// res.writeHead(200);
	// res.end(myData);
  
  fs.readFile(__dirname + '/data.txt', function(err, data) {
  	
  	res.writeHead(200);
  	res.end(data);
  });



  // res.end('<a href="http://www.google.com">The Googles</a>');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
