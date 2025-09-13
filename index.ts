let userName: string = 'Mark';
console.log(userName);

// типы данных
// создание переменных
const age: number = 20; // к типу number также относятся числа с плавающей точкой (20.74935), NaN, Infinity
console.log(age);

const a1: number = 7.5; // NaN, Infinity
const a2: string = 'hello'; // "hello", `hello`
const a3: boolean = true; // false
const a4: null = null;
const a5: undefined = undefined;
const a6: any = true;

// типизация функций
function f1(a: number, b: string, c: boolean): string {
    return 'hello';
}

// типизация стрелочных функций
const f2 = (a: number, b: string, c: boolean): string => {
    return 'hello world'
}

type User = {
    name: string;
    age: number;
    car: { color: string };
};

interface User2 {
    name: string;
    age: number;
    car: { color: string };
};


// типизация объектов
const obj: User = { name: 'Alex', age: 20, car: { color: 'red' } }


// --------- Union types (объединение типов) -----------
let result: number | string;
result = 10;
result = "Success";
// result = false;  -- TS не позволит присвоить значение false
// result = []; -- TS не позволит присвоить значение []


function printResult(value: number | string) {
    console.log(`Result: ${value}`);
}

printResult(15);
printResult('Hello');
// printResult(false); -- TS не позволит присвоить значение boolean так как ожидается тип number | string


// --------------------- Enums (перечисления) ---------------------
/* enum (перечисление) — это специальный тип данных, позволяющий определить набор именованных
 констант, которые могут быть числовыми или строковыми. */
// 1. Числовые перечисления
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

const move: Direction = Direction.Up;
console.log(move); // Результат вывода: 0

// 2. Строковые перечисления
// Пример 1:
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

const favoriteColor: Color = Color.Green;
console.log(favoriteColor);

// Пример 2:
enum ResponseCodes {
    Ok = 200,
    Created = 201,
    NotFound = 404,
    ServerError = 500,
}

const responseCode: ResponseCodes = ResponseCodes.Created;
console.log(responseCode);

// 4. Смешанные перечисления
enum MixedEnum {
    No = 0,
    Yes = "YES"
}

console.log(Direction[0]);
