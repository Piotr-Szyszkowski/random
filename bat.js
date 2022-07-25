const { batman } = require("./disBeExported");

const testString =
  "Stranger things is about Vcna guy this time, who is a wizard.";
const findVecna = new RegExp("Vecna");
const vecnaIsHere = findVecna.test(testString);

console.log(batman);
