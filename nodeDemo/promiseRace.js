import thenFs from "then-fs";
let a = thenFs.readFile("./files/1.txt", "utf-8");
let b = thenFs.readFile("./files/2.txt", "utf-8");
let c = thenFs.readFile("./files/3.txt", "utf-8");
let PromiseArr = [a, b, c];
// 打印的结果跟放的顺序无关
Promise.race(PromiseArr).then((result) => {
  console.log(result);
}).catch(error=>{
    console.log(error);
});
