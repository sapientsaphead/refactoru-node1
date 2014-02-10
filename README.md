### NODE1: Your First Server

#### Objective
Create a simple node script that serves a static HTML file without using a framework.

#### Skills
* Setting up Node.js.
* Understanding the relationship between client and server.
* Using the File System module.
* Asynchronous Operations

#### Resources
* [nodejs.org](http://nodejs.org/)
* [fs.readFileSync](http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options)
* [fs.readFile](http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)

#### Requirements
##### Part I

1. Follow the instructions on [nodejs.org](http://nodejs.org/) under "An example: Webserver" to create a simple web server. Just use the first code block (not the TCP server, `var net = ...`).

##### Part II

1. Change the content that is returned to the client with `res.end(...)` to a string of HTML.
2. In Terminal, kill the running node process by typing `Ctrl+C`. Run `node app.js` again to restart the server.
3. Request the page again in your browser. What is the output? Is it what you expected?
4. Change the response header Content-Type from text/plain to text/html. Request the page again in your browser. How did the output change?

##### Part III

1. Create a data.txt file in the same folder as your node script. Add some arbitrary text to this file.
2. Go back to your js file and include the File System module using `require`:
```
var fs = require('fs');
```
3. Call [fs.readFileSync](http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options) to read the contents of the file you just created. readFileSync will return the contents of the file, which you can store in a variable.
4. Change the `res.end` to return the file contents to the client.
5. Restart the server.
6. Refresh the page in your browser. You should see the contents of the file written to the page.
```
The problem with readFileSync is that it is blocking. In other words, the server has to sit and wait 
for the read operation to complete before it can handle any other operations or requests. Reading 
from the file system is slow. It may involve accessing a hard drive or other media. In order to keep 
the whole server from getting slowed down by waiting for the operation to complete, we use 
readFile (see below).
```

The difference between `readFileSync` and `readFile`:

* `readFileSync` blocks the server while reading the file then returns the contents of the read file.
* `readFile` accepts a callback function. It immediately returns so that the server can process other requests, and it calls the callback when the file has been read. The contents of the file is passed as an argument to your callback.
```
Note: It is crucial in Node to use asynchronous operations for any potentially slow operations such as reading a file or accessing the database. The performance of node is highly dependent on being able to process other operations and requests while waiting for slow operations to complete. Javascript's callbacks are a perfect paradigm for this event-based communication structure.
```

##### Part IV

1. We're going to redo PART III using `fs.readFile`.
2. Call [fs.readFile](http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback), passing an anonymous function as a callback which will process the content once it's read.
3. Move `res.writeHead` and `res.end` inside the callback and change `res.end` to output the contents of the file to the client.
4. Restart the server.
5. Refresh the page in your browser. You should see the contents of the file written to the page.
```
Success! Now you know how to create your own web server using nodejs, return content to the client, set the content-type of the response, read a file from the file system, and use asynchronous file reading which goes a long way towards leveraging the speed of nodejs!
```
