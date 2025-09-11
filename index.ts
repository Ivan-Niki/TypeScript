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




// типизация объектов
const obj: { name: string; age: number; car: { color: string } } = { name: 'Alex', age: 20, car: { color: 'red' } }