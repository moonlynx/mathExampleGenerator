Генератор математических примеров
=================================

API:
----
1. getExample(operator, maxNumber)
2. getAnswer(example)
3. getOperator(operators)

Подключение:
------------
* В `node.js`:

```js
const mathgen = require("path/to/mathgen.js");
console.log(mathgen.getExample("+", 10)); 
```

* В `requireJS`:
```js
require(["mathgen"], function(mathgen){
    alert(mathgen.getExample("+", 10));
});
```
* В `HTML`:
```html
<script src="mathgen.js"></script>
...
<script>
    alert(mathgen.getExample("+", 10));
</script>
```

Описание методов:
-----------------

### getExample(operator, maxNumber)

#### Аргументы:

1. **operator** - строка, содержащая оператор сложения(+), вычитания(-), умножкния(*), деления(/)
2. **maxNumber** - максимально возможное число в примере (от 1 до maxNumber включительно)

#### Вывод:
Возвращает строку, содержащую математический пример. Формат строки: "<число> <оператор> <число>"

#### Пример:
getExample("+", 10) --> "3 + 7" (могут быть любые числа от 1 до 10)

#### Ошибки:
1. **"getExample function must have 2 arguments"**
   Не передан хотя бы один аргумент
2. **"First argument of getExample function must be string"**
   Первый аргумент не строка
3. **"Second argument of getExample function must be number"**
   Второй аргумент не число
4. **"Unknown operator "+ operator**
   Строка, переданная в качестве первого аргумента не содержится в массиве ["+", "-", "*", "/"]

### getAnswer(example)

#### Аргументы:

1. **example** - математический пример. Строка "<число> <оператор> <число>"

#### Вывод:
Возвращает число, являющееся решением примера

#### Пример:
getAnswer("2 + 2") --> 4

#### Ошибки:
1. **"No argument of getAnswer function"**
   Не передан аргумент
2. **"Argument of getAnswer function must be string"**
   Переданный аргумент не является строкой
3. **"Example format must be '<number> <operator> <number>'"**
   Формат строки, переданной в качестве аргумента не "<число> <оператор> <число>"
4. **"Unknown operator " + operator**
   Оператор указанный в строке не содержится в массиве ["+", "-", "*", "/"]

### getOperator(operators)

#### Аргументы:

1. **operators** - массив операторов, "+", "-", "/", "*" в любых вариациях, кроме пустого массива

#### Вывод:
Возвращает строку, содержащую случайный элемент переданного массива

#### Пример:

1. getOperator(["+"]) --> "+"
2. getOperator(["+", "-"]) --> "+" или "-", выбранный случайным образом

#### Ошибки:
1. **"No argument of getOperator function"**
   Не передан аргумент
2. **"Argument of getOperator function must be array"**
   В качестве аргумента должен быть передан массив
3. **"To many items in argument of getOperator function"**
   Длина массива, переданного в качестве аргумента не должна быть больше 4
4. **"Unknown operator in argument of getOperator function " + operator**
   Один из элементов массива переданного в качестве аргумента не соответствует строке "+", "-", "*" или "/" 