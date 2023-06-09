# ITGIRLschool_JS_Week_15

## Теоретические вопросы
### 1. Из скольких частей состоит основной цикл?
Из двух: условия и тела.

### 2. Какое количество уровней вложенности могут иметь циклы?
В JavaScript циклы могут иметь неограниченное количество уровней вложенности, но использование глубоко вложенных циклов может привести к плохой производительности и сложному пониманию кода.

### 3. Если switch находится внутри функции, какая инструкция может использоваться для выхода из него?
Для выхода из switch внутри функции можно использовать инструкцию break.

### 4. Можно ли пропускать части for? Что получится, если написать for(;;)? 
Да, можно пропустить части for. Например, если не нужно выполнять какие-то операции до начала цикла или после его завершения, можно не указывать соответствующие части.

Если написать for(;;), это означает бесконечный цикл, который будет выполняться до тех пор, пока не будет прерван внутри цикла с помощью оператора break или return. Использование бесконечного цикла без необходимости может привести к зацикливанию программы и перегрузке процессора.

### 5. Самостоятельно разберитесь, как работает цикл while и приведите два примера кода с его использованием.
Цикл while представляет собой структуру, которая продолжает выполнение блока кода, до тех пор, пока указанное условие истинно.

Синтаксис цикла while выглядит следующим образом:

```
while (условие) {
  // код, который нужно выполнить
}
```
Перед каждой итерацией цикла while, вычисляется условие в круглых скобках. Если оно истинное, то выполняется блок кода внутри фигурных скобок.

Пример 1:

```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

В этом примере цикл while выполняется пять раз, печатая значения i от 0 до 4. Изначально i равна 0, после чего он увеличивается на 1 в каждой итерации, пока не достигнет значения 5.

Пример 2:

```
let x = 10;
while (x > 0) {
  console.log(x);
  x -= 2;
}
```

В этом примере цикл while печатает значения x, начиная с 10 и уменьшая на 2 в каждой итерации, пока не достигнет значения 0. Результатом выполнения будет вывод в консоль следующих значений: 10, 8, 6, 4, 2.
### 6. Как можно принудительно остановить выполнение цикла?
Существует несколько способов принудительно остановить выполнение цикла:

1. Использовать оператор break для выхода из цикла:

```
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

2. Использовать оператор return внутри функции, которая содержит цикл:

```
function test() {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      return;
    }
    console.log(i);
  }
}
```

3. Использовать флаг для прерывания цикла:

```
let stop = false;
for (let i = 0; i < 10; i++) {
  if (stop) {
    break;
  }
  if (i === 5) {
    stop = true;
  }
  console.log(i);
}
```
### 7. При помощи цикла for выведите чётные числа от 2 до 10.
```
for (let i = 2; i <=10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

### 8. Если тело цикла состоит лишь из одной инструкции, мы можем опустить фигурные скобки {…}?
Да, если тело цикла состоит только из одной инструкции, фигурные скобки можно опустить. Однако, это не рекомендуется для улучшения читаемости кода.

### 9. Что выведет цикл?
```
for (let i = 0; i < 3; i++) { 
  console.log(i);
}
```

Цикл выведет:
0
1
2

### 10. Оба цикла выводят в консоль одинаковые значения или нет?
```
let i = 0;
while (++i < 5) console.log(i);

// и

let i = 0;
while (i++ < 5) console.log(i);
```

Нет, они выводят разные значения. 

Первый цикл начинается с i = 1 и выводит числа от 1 до 4 (i < 5), так как используется префиксный инкремент (++i), то есть значение i увеличивается на 1 перед каждой проверкой условия.

Второй цикл также начинается с i = 1, но выводит числа от 2 до 5 (i++ < 5), так как используется постфиксный инкремент (i++), то есть значение i увеличивается на 1 после каждой проверки условия. Таким образом, при первой итерации i равно 1, но сначала проверяется условие (1 < 5), затем i увеличивается на 1 (становится равным 2) и выводится на экран, и так далее.

## Практическое задание
Реализована мини-программа для постановки задач. Все файлы находятся в корневой папке.
Также сделано задание под звездочкой. Соответствующий код JS находится в файле src/difficultTask.js. Для запуска этой части кода необходимо расскомментировать строку №34 в файле index.js. 