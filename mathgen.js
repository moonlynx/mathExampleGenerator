/**
 * Предоставляет функции для:
 * - генерации математического выражения в формате "<число> <оператор> <число>"
 * - получения значения математического выражения
 * - получения случайного элемента из переданного массива операторов
 *
 *@author {moonlynx} Yuri
 *
 *@version 1.0
 *
 */

/**
 * Возвращает случайное число от 0 до maxNumber включительно
 * 
 * @param {Integer} maxNumber - задает границу максимального числа для выражения
 * 
 * @return {Integer} случайное число для выражения
 */
function getNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber + 1);
}

/**
 * Функция для нахождения всех вариантов делимого по делителю для операции 
 * целочисленного деления
 * 
 * @param {Integer} number - делитель
 * @param {Integer} maxNumber - задает границу максимального числа для делимого
 * 
 * @return {Integer} случайное делимое из всех возможных вариантов
 */
function getDivNumber(number, maxNumber) {
    var numbers = [];
    
    for (var i = number; i <= maxNumber; i += number) {
        numbers.push(i);
    }
    
    return numbers[Math.floor(Math.random() * numbers.length)];
}

/**
 * Функция для получения случайного элемента из переданного массива операторов
 * 
 * @param {Array} operators - массив математических операторов ("+", "-", "/", "*")
 * 
 * @return {String} случайный оператор из переданного массива операторов 
 */
function getOperator(operators) {

    if (typeof operators === "undefined") {
        throw new Error("No argument of getOperator function");
    }

    if ((typeof operators !== "object") || (typeof operators.length === "undefined")) {
			throw new Error("Argument of getOperator function must be array");
	}

    if (operators.length > 4) {
        throw new Error ("To many items in argument of getOperator function");
    }

    operators.forEach(function(operator) {
        if (["+", "-", "*", "/"].indexOf(operator) === -1) {
            throw new Error ("Unknown operator in argument of getOperator function " + operator);
        }
    });
    

    var operNumber = Math.floor(Math.random() * operators.length);
    return operators[operNumber];
}

/**
 * Функция для генерации математического выражения
 * 
 * @param {String} operator - математический оператор
 * @param {Integer} maxNumber - задает границу максимального числа для выражения
 * 
 * @return {String} математический пример 
 */
function getExample(operator, maxNumber) {
    
    var firstNumber,
        secondNumber;

    if ((typeof operator === "undefined") || (typeof maxNumber === "undefined")) {
        throw new Error ("getExample function must have 2 arguments");
    }

    if (typeof operator !== "string") {
        throw new Error ("First argument of getExample function must be string");
    }

    if ((typeof maxNumber !== "number") || isNaN(maxNumber)) {
        throw new Error ("Second argument of getExample function must be number");
    }

    if (["+", "-", "*", "/"].indexOf(operator) === -1) {
        throw new Error ("Unknown operator " + operator);
    }
       
    switch(operator) {
        case "+":
            firstNumber = getNumber(maxNumber);
            secondNumber = getNumber(maxNumber);
            break;
        case "-":
            firstNumber = getNumber(maxNumber);
            secondNumber = getNumber(firstNumber);
            break;
        case "*":
            firstNumber = getNumber(maxNumber);
            secondNumber = getNumber(maxNumber);
            break;
        case "/":
            secondNumber = getNumber(Math.floor(maxNumber / 2));
            firstNumber = getDivNumber(secondNumber, maxNumber);
            break;
        default:
            return;            
    }
    
    return firstNumber + " " + operator + " " + secondNumber;
}

/**
 * Функция для нахождения значения математического выражения
 * 
 * @param {String} example - Математическое выражение в формате "<число> <оператор> <число>"
 * 
 * @return {Integer} значение математического выражения 
 */
function getAnswer(example) {
    
    if (typeof example === "undefined") {
        throw new Error ("No argument of getAnswer function");
    }
    
    if (typeof example !== "string") {
        throw new Error ("Argument of getAnswer function must be string");
    }
    
    var arr = example.split(" ");

    arr[0] = parseInt(arr[0]);
    arr[2] = parseInt(arr[2]);

    if ((arr.length !== 3) || 
        (isNaN(arr[0])) ||
        (isNaN(arr[2]))) {
        throw new Error ("Example format must be '<number> <operator> <number>'");
    }
    
    if (["+", "-", "*", "/"].indexOf(arr[1]) === -1) {
        throw new Error ("Unknown operator " + arr[1]);
    }

     switch(arr[1]) {
        case "+":
            return arr[0] + arr[2];
        case "-":
            return arr[0] - arr[2];
        case "*":
            return arr[0] * arr[2];
        case "/":
            return arr[0] / arr[2];
        default:
            return;
    }
}