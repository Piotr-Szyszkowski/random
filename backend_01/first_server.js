const http = require("http");

const server = http.createServer((request, response) => {
  const { method } = request;
  response.setHeader("Content-Type", "some");
  response.statusCode = 200;
  response.write(
    JSON.stringify({ message: `Howdy Pardner!! method was ${method}` })
  );
  response.end();
});

server.listen(9090, (err) => {
  if (err) console.log(err);
  else console.log("Server listening on port: 9090");
});
