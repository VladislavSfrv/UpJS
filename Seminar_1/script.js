// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. 
// Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ 
// Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. 
// Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
// вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
  musicAlbums: [
    {
      title: "Красность",
      artist: "Куок",
      year: 2019
    },
    {
      title: "3TERNITY",
      artist: "Eric Reprid",
      year: 2022
    }
  ],
  [Symbol.iterator]() {
    this.index = 0;
    return this;
  },
  next() {
    return this.index < this.musicAlbums.length
      ? { done: false, value: this.musicAlbums[this.index++] }
      : { done: true };
  }
}

for (const music of musicCollection) {
  console.log(`Артист - ${music.artist}, альбом - ${music.title}, год - ${music.year} `);
}

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, 
// специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. 
// В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const cooks = new Map();
cooks.set("Виктор", "Пицца")
  .set("Ольга", "Суши")
  .set("Дмитрий", "Десерты");

const dishes = new Map();
dishes.set("Пицца 'Маргарита'", "Виктор")
  .set("Пицца 'Пепперони'", "Виктор")
  .set("Суши 'Филадельфия'", "Ольга")
  .set("Суши 'Калифорния'", "Ольга")
  .set("Тирамису", "Дмитрий")
  .set("Чизкейк", "Дмитрий");

const orders = new Map();

const clientOne = {name: "Алексей"};
const clientOneOrder = new Set();
clientOneOrder.add("Пицца 'Пепперони'")
  .add(" Тирамису");

const clientTwo = {name: "Мария"};
const clientTwoOrder = new Set();
clientTwoOrder.add("Суши 'Калифорния'")
  .add(" Пицца 'Маргарита'");

const clientThree = {name: "Ирина"};
const clientThreeOrder = new Set();
clientThreeOrder.add("Чизкейк");

orders.set(clientOne, clientOneOrder)
  .set(clientTwo, clientTwoOrder)
  .set(clientThree, clientThreeOrder);

console.log(`Клиент ${clientOne.name} заказал: ${[...orders.get(clientOne)]}`);
console.log(`Клиент ${clientTwo.name} заказала: ${[...orders.get(clientTwo)]}`);
console.log(`Клиент ${clientThree.name} заказала: ${[...orders.get(clientThree)]}`);