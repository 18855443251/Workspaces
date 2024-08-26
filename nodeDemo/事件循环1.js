import thenFs from "then-fs";
// A D C B
console.log("A");
thenFs.readFile("./files/1.txt", "utf-8").then((value) => {
  console.log("B");
});
setTimeout(() => {
  console.log("C");
}, 0);
console.log("D");
