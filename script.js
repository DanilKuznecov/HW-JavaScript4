console.log('Задание - "a"'); 

do{
    var name = prompt('Введите своё имя')
}while(name == ' ' || !isNaN(name))

do{
    var y = +prompt('Введите свой год рождения')
}while(y == ' ' || isNaN(y))

do{
    var z = +prompt('Введите текущий год')
}while(z == ' ' || isNaN(z));

function getAge(name, y, z) {    
    let res = name + ', Ваш Возраст ' + (z - y)
    return  res    
};

alert(getAge(name, y, z));


console.log('Задание - "b"');

let count = +prompt('Введите кол-во примеров')

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomSymbol() {
    return Math.floor(Math.random() * (5 - 1) + 1)
}

for(let i = 0; i < count; i++) {
    let num1 = randomNum(1,100)
    let num2 = randomNum(1,100)
    let symbol = randomSymbol()
    let result = 0

    if(symbol == 1) {
        symbol = '+'
        result = num1 + num2
    }else if(symbol == 2) {
        symbol = '-'
        result = num1 - num2
    }else if(symbol == 3) {
        symbol = '*'
        result = num1 * num2
    }else if(symbol == 4) {
        symbol = '/'
        result = num1 / num2
    }
    
    let question = +prompt(num1 + symbol + num2 + ' = ?')

    console.log(question == result ? ' Ваш ответ Верный! - ' + question : ' Ваш ответ не верный ' + question + ' - Верный ответ будет ' + result);

}


