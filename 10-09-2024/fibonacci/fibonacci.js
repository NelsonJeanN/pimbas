const prompt = require("prompt-sync")()


let a = 0
let b = 1

for (let i = 2; i <= 10; i++) {

    let c = a + b
    a = b
    b = c

    console.log(c)
    const total = c
    console.log(`total: ${total}`)
}
