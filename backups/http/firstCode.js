const http = require('http');

http.createServer( ( req, res ) => { // rec comes from recuest that is what we get when someone make a request to our server, and res is the response, that's what we return to the request after procecing it.

  console.log(req); // Oon this way we can see the data of the http request

  //res.writeHead(201, { "Content-Type": 'text/plain' }); // with .writeHead() method we especifie the status code https://developer.mozilla.org/en-US/docs/Web/HTTP/Status and other headers

  res.write('<h1> Hola wachin! </h1> <style>body{background-color:black;color:red;}</style>'); // with .write() method we cant send this text writed as the response
// here we are doing a response for every petition at the server. but in this way the navigator is expecting to close the connection and show the results. so we need to tell the respnse that the process of it's request has end an we will send what has writted before

  res.end(); // we do it with .end() methos that close and end the reponse and kill the connection. read about conntection : keep-alive


})
.listen( 15001 )// .listen() method is so much important this comes from the result of http.createServer() method. this method listen on the port especified, where our server aplication will take and send the information

console.log("listenning at port: ", 15001) // to send a message to the console where we execute the server and know where is listenning without seen the code, and confirm that the code is executing well

// we are using the 8080 port because it is usually dedicated as web test, and the port 80 is used because is standarized as http port and is normally used for other applications