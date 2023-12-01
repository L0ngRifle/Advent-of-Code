import * as fs from 'fs';


const example = fs.readFileSync('../SourceFiles/AoC23-Day1-1-example.txt','utf8');
const exempleArray = example.split("\r\n")
const input = fs.readFileSync('../SourceFiles/AoC23-Day1-1-input.txt','utf8');
const inputArray = input.split("\r\n")

const justDigits = inputArray.map(_=>_.replace(/\D/g,""))
const firstLast = justDigits.map(_=>{
    let first = _.charAt(0)
    let last = _.charAt(_.length - 1)
    return +(first + last)
})
const sum = firstLast.reduce((sum, current) => sum + current)
console.log(justDigits)
console.log(firstLast)
console.log(sum)



