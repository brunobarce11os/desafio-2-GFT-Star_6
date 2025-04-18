function calculateRanking (victories, defeats) {
    let rankedBalance = victories - defeats
    let level = ""

    if (victories < 10){
        level = "Ferro"
    } else if (victories >= 11 && victories <= 20){
        level = "Bronze"
    } else if (victories >= 21 && victories <= 50){
        level = "Prata"
    } else if (victories >= 51 && victories <= 80){
        level = "Ouro"
    } else if (victories >= 81 && victories <= 90){
        level = "Diamante"
    } else if (victories >= 91 && victories <= 100){
        level = "Lendário"
    } else if (victories >= 101){
        level = "Imortal"
    }
    return `O Herói tem de saldo de ${rankedBalance}, está no nível de ${level}`
}

let result = calculateRanking(104,1)
console.log(result)