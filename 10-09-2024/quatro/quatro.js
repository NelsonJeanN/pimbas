const prompt = require("prompt-sync")()
let i = 0
while (i <= 30){
if (i % 4 === 0){
    i++
    continue;
}
console.log(i)
i++
}