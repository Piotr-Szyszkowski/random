$(function () {
  console.log("jQuery working");
  $(".original").on("click", function () {
    console.log("original firing");
  });
});
$(function () {
  $(".secondary").on("click", function () {
    console.log("secondary firing too");
  });
});
