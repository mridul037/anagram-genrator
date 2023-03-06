const path = require("path");
const fs = require("fs");
var args = process.argv[2];
const filePath = path.join(__dirname, args);

  fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
    let final = [];
    let arr = data.split("\n");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        final.push(arr[i].trim());
      }
    }
    const sorted = final.map((el) => el.split("").sort().join(""));
    const hash = {};

    for (let i = 0; i < final.length; i++) {
      if (!hash[sorted[i]]) {
        hash[sorted[i]] = [final[i]];
      } else {
        hash[sorted[i]].push(final[i]);
      }
    }

    let anagram = Object.values(hash);
    let temp = [];
    for (let i = 0; i < anagram.length; i++) {
      let str = anagram[i].join(",");
      temp.push(str);
    }
    temp = temp.join("\n");
   
    fs.writeFile(filePath+"_solution",temp, function(err) {
        if (err) throw err;
            console.log('complete');
        })
  });


