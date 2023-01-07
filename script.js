// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// ================================================
// Обьекты
// ================================================
// console.log(name);
// console.log(tag);
// console.log(userLikes);

// const playlist = {
//   name: "may super list",
//   rating: 7,
//   tracks: ["trak1", "trak2", "trak3"],
//   trackCount: 3,
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//     this.trackCount = this.tracks.length;
//   },
// };

// playlist.changeName("new Trakkk");
// console.log(playlist.name);

// playlist.addTrack("track4");
// console.log(playlist.tracks[0]);

//
//

// const feedback = {
//   good: 6,
//   neutral: 4,
//   bad: 3,
// };

// let allfeedbacks = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(feedback[key]);
//   allfeedbacks += feedback[key];
// }

// console.log(feedback["good"]);
// console.log(allfeedbacks);

// const feedback = {
//   good: 6,
//   neutral: 4,
//   bad: 3,
// };

// let allfeedbacks = 0;

// const vals = Object.values(feedback);
// console.log(vals);

// for (const val of vals) {
//   allfeedbacks += val;
// }
// console.log(allfeedbacks);

// Ищем продукт по названию:

// const products = [
//   { name: "orang", price: 28, count: 19 },
//   { name: "apple", price: 19, count: 19 },
//   { name: "orang", price: 28, count: 19 },
// ];

// const findProductByName = function (allProducts, name) {
//   for (const product of allProducts) {
//     if (product.name === name) {
//       return console.log("FIND IT!");
//     }
//   }
//   return console.log("DO NOT FIND IT!");
// };

// findProductByName(products, "apple");
// findProductByName(products, "juse");

// получить масив из названий всех продуктов
// const products = [
//   { name: "orang", price: 28, count: 19 },
//   { name: "apple", price: 19, count: 19 },
//   { name: "orang", price: 28, count: 19 },
// ];

// const allProductsName = function (allProducts) {
//   const arrNames = [];
//   for (const product of allProducts) {
//     arrNames.push(product.name);
//   }
//   return arrNames;
// };

// console.log(allProductsName(products));

// РАСПЫЛЕНИЕ ОБЬЕКТОВ
// const a = {
//   x: 1,
//   y: 2,
// };
// const b = {
//   x: 5,
//   z: 18,
//   v: 7,
// };
// const c = {
//   ...a,
//   ...b,
// };
// console.log(c);

// ПАТЕРН ОБЬЕКТ НАСТРОЕК
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: "vip",
// };

// const func = function ({ name, tag, stats } = {}) {
//   console.log(name);
//   console.log(tag);
//   console.log(stats);
// };
// func(user);

// =====
// БУЗ ДЕСКРУТУРИЗАЦИИ

// const nums = {
//   num1: 10,
//   num2: 15,
//   num3: 7,
// };

// const addAllSumm = function (obj) {
//   return obj.num1 + obj.num2 + obj.num3;
// };

// console.log(addAllSumm(nums));

// С ДЕСКРУТУРИЗАЦИЕЙ
// const nums = {
//   num1: 10,
//   num2: 15,
//   num3: 7,
// };

// const addAllSumm = function ({ num1, num2, num3 } = {}) {
//   return num1 + num2 + num3;
// };

// console.log(addAllSumm(nums));

// const cart = {
//   items: [],
//   getItem() {
//     return this.items;
//   },
//   add(product) {
//     this.items.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       if (productName === this.items[i].name) {
//         this.items.splice(i, 1);
//         return;
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let allSummProdact = 0;
//     for (const elem of this.items) {
//       allSummProdact += elem.price;
//     }
//     return allSummProdact;
//   },
// };

// cart.add({ name: "appale", price: 29 });
// cart.add({ name: "orange", price: 38 });
// cart.add({ name: "banana", price: 35 });
// // console.table(cart.getItem());
// // cart.remove("orange");
// // console.log(cart.getItem());
// // cart.clear();
// // console.log(cart.getItem());
// // cart.add({ name: "banana", price: 35 });
// // console.log(cart.getItem());
// // cart.add({ name: "appale", price: 29 });
// // cart.add({ name: "orange", price: 38 });
// // console.log(cart.getItem());
// cart.remove("orange");
// console.log(cart.getItem());

// Change code below this line
// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (num < arg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// const textAll = function (text, callback) {
//   console.log(text + " " + callback("Sasha"));
// };

// const text2 = function (name) {
//   return name;
// };

// textAll("Hello,", text2);

// const digutSum = function (w, c, callback) {
//   return console.log(callback(w, c));
// };

// digutSum(10, 15, function (a, b) {
//   return a + b;
// });
// digutSum(10, 15, function (a, b) {
//   return a * b;
// });

// const buttonClick = document.querySelector(".js-button");

// buttonClick.addEventListener("click", function () {
//   console.log("hello, Sasha!");
// });

// const filter = function (arr, callback) {
//   const newArr = [];
//   for (const item of arr) {
//     if (callback(item)) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// };

// const callback1 = function (elem) {
//   return elem <= 3;
// };

// const callback2 = function (elem) {
//   return elem > 3;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback1));
// console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], callback2));

// const cars = [
//   { name: "toyota", price: 12300 },
//   { name: "honda", price: 12500 },
//   { name: "subaru", price: 11500 },
//   { name: "Suzuki", price: 10300 },
// ];

// const callback3 = function (elem) {
//   return elem.price > 12000;
// };

// const carPriceGood = filter(cars, callback3);

// console.log(carPriceGood);

// const cars = [
//   { name: "toyota", price: 12300 },
//   { name: "honda", price: 12500 },
//   { name: "subaru", price: 11500 },
//   { name: "Suzuki", price: 10300 },
// ];

// const allNameCars = cars.map((elem) => elem.price);

// console.log(allNameCars);

// sort
// const arrNums = [1, 3, 7, 2, 9, 5, 6, 3];

// const newArr = arrNums.sort((a, b) => {
//   return a - b;
// });
// const newArr2 = arrNums.sort((a, b) => {
//   return b - a;
// });
// console.log(newArr);
// console.log(newArr2);

//
// const cars = [
//   { name: "toyota", price: 12000 },
//   { name: "honda", price: 12500 },
//   { name: "subaru", price: 11500 },
//   { name: "Suzuki", price: 10300 },
// ];

// const newCars = [...cars].sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(newCars);

// // сортировка масивы по тексту первой буквы
// var items = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
// items.sort(function (a, b) {
//   return a.localeCompare(b);
// });
// console.log(items);
// // items равен ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']

// // сортировка обьекта по тексту первой буквы выбраного свойства
// const cars = [
//   { name: "toyota", price: 12000 },
//   { name: "honda", price: 12500 },
//   { name: "subaru", price: 11500 },
//   { name: "acura", price: 10300 },
// ];
// // делаем копию обьекта
// const newCars = [...cars];
// // делаем сортировку по свойству 'name':
// newCars.sort(function (a, b) {
//   return a.name.localeCompare(b.name);
// });
// console.log(newCars);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (elem) {
//     if (secondArray.includes(elem)) {
//       commonElements.push(elem);
//     }
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }

// world.splice("ru", 1, "Uk");

// Change code below this line

// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // Change code above this line

// function changeEven(numbers, value) {
//   // Change code below this line
//   const arrayEven = [];
//   numbers.forEach((elem) => {
//     if (elem % 2 === 0) {
//       arrayEven.push(elem + value);
//     } else {
//       arrayEven.push(elem);
//     }
//   });
//   return arrayEven;
//   // Change code above this line
// }

// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((el) => el.title === BOOK_TITLE);
// const bookByAuthor = books.find((el) => el.author === AUTHOR);

// // Change code below this line
// const sortByName = (users) => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// // Change code above this line

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter((elem) => elem.rating > MIN_BOOK_RATING)
//   .map((elem) => elem.author)
//   .sort((a, b) => a.localeCompare(b));

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter((elem) => elem.gender === gender)
//     .reduce((previousValue, number) => {
//       return previousValue + number.balance;
//     }, 0);
// };
// // Change code above this line

// const logInUsre = function (ok, fail) {
//   const PASS = "sdsdcd235";
//   if (PASS === "sdsdcd235") {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: "Sasha",

//   lokOk() {
//     console.log(`${this.name} login good`);
//   },

//   lokFail() {
//     console.log(`${this.name} login fail`);
//   },
// };

// logInUsre(user.lokOk.bind(user), user.lokFail.bind(user));

const user = {
  cars: [
    { name: "toyota", price: 12000, quvintity: 7 },
    { name: "honda", price: 12500, quvintity: 4 },
    { name: "subaru", price: 11500, quvintity: 3 },
    { name: "acura", price: 10300, quvintity: 2 },
  ],
  sumCar(nameCar) {
    const xxx = this.cars.find((elem) => {
      if (elem.name === nameCar) {
        return elem;
      }
    });
    if (xxx === undefined) {
      return "not a car";
    } else {
      return xxx.price * xxx.quvintity;
    }
  },
};

console.log(user.sumCar("hond"));
