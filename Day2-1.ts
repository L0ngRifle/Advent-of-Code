import * as fs from 'fs';


const example = fs.readFileSync('./SourceFiles/Aoc23-Day2-1-example.txt','utf8');
const input = fs.readFileSync('./SourceFiles/AoC23-Day2-1-input.txt','utf8');
let array = example.split("\r\n")
const games: {
    id: string;
    draws: {
        color: string;
        number: number;
        }[][];
}[]  = array.map(line=>{
    let split = line.split(":")
    let pullRaw = split[1].split(";")
    let pulls = pullRaw.map(row=>{ 
        let colorsArray = row.split(",")
        let pull = colorsArray.map(elm=>{
            let colorRawData = elm.split(" ").filter(Boolean)
            return{color: colorRawData[1], number: +colorRawData[0]}
        })
        return pull
    })
    return {id: split[0].replace("Game ",""), draws: pulls}
})
//console.log(JSON.stringify(games, null, 3))
console.log(games)

const target = {
    red: 12,
    green: 13,
    blue: 14
}


const numbers = games.map(game => {
    let isGood: boolean = true
    //console.log(`---------Game ${game.id}-------`)
    isGood = game.draws.some((draw, idx)=>{
        //console.log(`draw ${idx}`)
        draw.some(dice => {
            //console.log(` - ${draw.color}: ${draw.number}`)
             (Object.keys(target) as (keyof typeof target)[]).every((keyColor) =>{
                if( keyColor == dice.color && target[keyColor] < dice.number){
                    return false
                }  
                return true  
            })
        })
    })
    console.log("isGood", isGood)
})

const sum = numbers.reduce((sum, current) => sum + current)
console.log(sum)

        