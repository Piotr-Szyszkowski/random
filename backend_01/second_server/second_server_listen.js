const { app } = require("./second_server");
app.listen(9090, () => {
  console.log("Server listening on port 9090");
});
