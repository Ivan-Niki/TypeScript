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


// ------------------ Типизация массивов ---------------------
// ------- списки -------
const arr: string[] = ['a', 'b', 'c'];
// arr.push(2);  -- TS выдаст ошибку, так как мы указали тип "массив строк"
const arr1: number[] = [];
const arr2: Array<number> = [1, 2, 3, 4, 5];

// создание вложенных массивов:
const arr3: string[][] = [];
arr3.push(['a', 'b', 'c']);
// arr3.push([1, 2, 3]); -- TS выдаст ошибку

// Для хранения в массиве разных типов данных:
const arr4: (string | number)[] = [];
arr4.push('hello', 23);
console.log(arr4);

// Также это можно сделать с использованием псевдонима типа
type MyArray = (string | number);
const arr5: MyArray[] = [];
arr5.push(12, "TS", "JS");
console.log(arr5);

// ------------ кортежи (tuple) ------------
// Кортеж имеет фиксированное количество элементов
const tuple1: [string, boolean, number] = ["abc", true, 0];

// csv
const example: [string, string, number][] = [  // в типах указываем, что ожидаем массив кортежей
    ['str', 'st', 32]
]



// ------------------ Типизация объектов ---------------------
// const obj: User = { name: 'Alex', age: 20, car: { color: 'red' } }

const obj: { a: number; b: number; c: string; } = {
    a: 1,
    b: 2,
    c: 'sdsd'
}

// типизацию объектов удобнее задавать через псевдонимы типов:
type MyObj = {
    a: number;
    b: number;
    c: string;
}

const obj2: MyObj = {
    a: 123,
    b: 345,
    c: "Hello",
}

// Описание объекта можно сделать при помощи псевдонимов типов или при помощи интерфейсов:

// ---------- Псевдонимы типов: -----------
type User = {
    name: string;
    age: number;
    car: { color: string };
};

const userIvan: User = {
    name: 'Ivan',
    age: 35,
    car: { color: 'brown' },
    // hasPets: true -- выдаст ошибку
}

// ------------ Интерфейсы: --------------
interface IUser2 {
    name: string;
    age: number;
    car: { color: string };
};

const userAlex: IUser2 = {
    name: 'Alex',
    age: 32,
    car: { color: 'green' }
}

// создание опционального параметра (ключа)
interface IUser3 {
    name: string;
    age: number;
    hasPets: boolean;
    car?: { color: string };  // ключ car является необязательным (может отсутствовать)
};

const userAndrew: IUser3 = {
    name: 'Andrew',
    age: 27,
    hasPets: true,
    // car: { color: 'gray' } -- данный параметр может отсутствовать в объекте (необязательный)
}
console.log('Andrew:', userAndrew);


// создание параметра (ключа) только для чтения:
interface IUser4 {
    readonly name: string;  // ключ name нельзя будет изменить, т.к. он является read-only параметром
    age: number;
    hasPets: boolean;
    car?: { color: string };  // ключ car является необязательным (может отсутствовать)
};

const userDmitry: IUser4 = {
    name: 'Dmitry',
    age: 27,
    hasPets: false,
    car: { color: 'gray' } // -- данный параметр может отсутствовать в объекте (необязательный)
}

// userDmitry.name = 'John'; -- TS выдаст ошибку (ключ name является read-only ключом)
userDmitry.age = 32;
console.log('userDmitry-obj:', userDmitry);


// Добавление дополнительного набора ключей к фиксированному набору коючей:
interface IUser5 {
    readonly name: string;
    age: number;
    hasPets: boolean;
    [key: string]: string | number | boolean;
};

const userMichail: IUser5 = {
    name: 'Michail',
    age: 25,
    hasPets: true,
    /* и далее мы можем сколько угодно добавлять параметров, удовлетворяющих 
    описанному нами типу в интерфейсе ( [key: string]: string | number | boolean ):    */
    sex: 'male',
    weight: 85,
    hasChildren: false,
    height: 184,
    eyesColor: 'blue',
    favoriteDish: 'pizza',
}

console.log('userMichail:', userMichail);


// ---------- Объединение интерфейсов ----------
interface IPerson {
    name: string;
    age: number;
}
interface IAccount {
    email: string;
    login: string;
    active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
    skills: string[];
    level?: string;
}
/* Созданный выше интерфейс IDeveloper будет содержать все ключи интерфейса IPerson и 
все ключи интерфейса IAccount, а также будет содержать ключи skills и level */

const developerNick: IDeveloper = {
    name: 'Nick',
    age: 32,
    email: 'nickdev@gmail.com',
    login: 'dfpij',
    active: true,
    skills: ['JS', 'TS', 'Playwright']
}

// ------------ Объединение псевдонимов типов (type alias) ------------
type Person = {
    name: string;
    age: number;
}

type Account = {
    email: string;
    login: string;
    active: boolean;
}

type Developer = {
    skills: string[];
    level?: string;
}

type FrontendDeveloper = Person & Account & Developer;

// создадим массив разработчиков: 
const devArr: FrontendDeveloper[] = [];
console.log(devArr);



// ----------------- Union types (объединение нескольких типов) ------------------
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


// ------------------ Any и unknown -------------------
// any
const anyValue: any = "this is a string";
const strLength: number = anyValue.length;

console.log(strLength);

// unknown
let value: unknown;

value = 10;
value = true;
value = "hello";


if (typeof value === "string") {
    console.log(value.toUpperCase());
}

// ============================ Типизация функций ===============================

const fn1 = (num: number): string => {
    return String(num);
}

console.log(fn1(23), typeof fn1(23));

// ------------- Функции с коллбэком в параметрах ------------
type Callback = (num: number) => string;
function fn2(cb: Callback) { }

// ----- Если коллбэк в параметрах функции не обязательный -----
function fn3(cb?: Callback) {
    if (cb === undefined) {
        cb = String;
    }
    cb(12)
}





// ============================ Generics (универсальные типы) ===============================
/*
Дженерики, или Generic Types, — Обобщения или Универсальные типы. Они нужны для описания похожих, но отличающихся какими-то характеристиками типов. Мы описываем общую структуру, а конкретную уже определяет пользователь дженерика.
Дженерики играют решающую роль в программировании, поскольку они позволяют создавать типобезопасные функции без предварительного указания точного типа, но допуская ограничения и проверки типов программистом.

*/
// interface IState<T, U, V, K> { }

// type State<T> = {}

// class State2<T> { }

// function state4<T>() { }

// Ниже приведён пример того, как написать функцию, которая возвращает первый элемент массива array.
// Вот пример функции возвращающей первый элемент массива в TypeScript с использованием дженериков:

function firstElement<T>(arr: T[]): T {
    return arr[0];
}

// Чтобы использовать функцию с различными типами массивов, при вызове функции передаётся определённый тип. Например:
// function firstElement<T>(array: T[]): T {
//     return array[0];
// }

const numbers = [1, 2, 3];
const firstNumber = firstElement<number>(numbers);
console.log(firstNumber); // 1




// function identity(arg) {
//     return arg;
// }


