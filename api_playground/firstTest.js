const https = require("https");
function getJoke() {
  const options = {
    hostname: "v2.jokeapi.dev",
    path: "/joke/Any",
    method: "GET",
  };
  const request = https.request(options, (res) => {
    console.log(`response status is: ${res.statusCode}`);
    let body = "";
    res.on("data", (packet) => {
      body += `/${packet.toString()}/`;
      console.log(body);
    });
  });
  request.end();
}
getJoke();
