// function summ(a,b) {
//     return a+b;
//   }
//   console.log(summ(3,4));
//   В js не используются такие функции - так как это долго
//   Используются стрелочные функции:
  let summ= (a,b) => a+b;
  
  console.log(summ(3,4));

    let sqrmy = (a) =>  Math.sqrt(a);

    console.log(sqrmy(4));

//   Class User () {
// this.a;
// constructor()
// console.log(a);
//   }

// Массивы

let a= []
for(let i=0; i<=11; i++) {
  a[i]=i;
}
console.log(a);

// Есть тип объекты

let b={
name:'Зарина',
Phone:'855',
age:33
}
console.log(b);


  class User {
constructor() {
console.log('Это класс');
this.a=null;
  }
}

// Наследник класса:

let user=new User(5) 
//   a=5,
//   function mult(a,b) {
//     return a*b
//   }
// }

// Тип большого User:

console.log(typeof(user));

// Это всe устаревшее - классы!

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const squares =  nums.map((num) => num*num)

console.log(squares)

// map - частая история, используем вместо for
