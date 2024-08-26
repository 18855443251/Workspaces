import thenFs from "then-fs";
// 2 4 3 1
setTimeout(() => {
  console.log("1");
});
new Promise((resolve, reject) => {
  console.log("2");
  resolve();
}).then((value) => {
  console.log("3");
});
console.log("4");
