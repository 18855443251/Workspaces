import thenFs from "then-fs";
function test(filePath) {
  return new Promise((resolve, reject) => {
    thenFs.readFile(filePath, "utf-8", (err, dataStr) => {
      console.log(err);
      if (err) return reject(err);
      resolve(dataStr);
    });
  });
}
test("./files/1.txt")
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error.message);
  });
