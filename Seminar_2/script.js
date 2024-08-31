// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. 
// В этом классе будет приватное свойство для хранения списка книг, 
// а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и 
// представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
// Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. 
// Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать 
// true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. 
// Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];
    constructor(books) {
        if (new Set(books).size !== books.length) throw new Error("Список книг содержит дубликаты");
        this.#books = [...books];
    }
    get allBooks() {
        return [...this.#books];
    }
    addBook(title) {
        if (this.#books.includes(title)) throw new Error("Книга с таким названием уже существует");
        this.#books.push(title);
    }
    removeBook(title) {
        if (!this.#books.includes(title)) throw new Error("Книги с таким названием нет в библиотеке");
        this.#books = this.#books.filter(book => book !== title);
    }
    hasBook(title) {
        return this.#books.includes(title);
    }
}

const books = new Library(["Книга 1", "Книга 2", "Книга 3"]);

// console.log(books.allBooks);

// books.addBook("Книга 4");

// console.log(books.allBooks);

// books.removeBook("Книга 2");

// console.log(books.allBooks);

// console.log(books.hasBook("Книга 2"));

// console.log(books.hasBook("Книга 3"));

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, 
// но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, 
// где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. 
// Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

let idFeedback = 1
function addElHtml(productName, reviewText = null) {
    const divFeedback = document.createElement('div');
    divFeedback.classList.add(`feedback-${idFeedback}`);

    const productNameEl = document.createElement('h2');
    productNameEl.textContent = productName;
    productNameEl.classList.add('productName');

    const btnEl = document.createElement('button');
    btnEl.textContent = "Отправить отзыв";
    btnEl.classList.add('btn');

    const inputEl = document.createElement('textarea');
    inputEl.setAttribute('placeholder', 'Введите отзыв...');
    inputEl.classList.add('input');

    divFeedback.append(productNameEl);

    const reviewTextEl = document.createElement('p');
    reviewTextEl.textContent = reviewText;

    const titleReviewEL = document.createElement('h3');
    titleReviewEL.textContent = "Отзывы:";

    divFeedback.append(inputEl, btnEl, titleReviewEL, reviewTextEl);

    return divFeedback;
}

const mainDivEl = document.querySelector('.main');

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте, много эксклюзивных игр и клевые дуалсенсы.",
            },
        ],
    },
];

initialData.forEach(element => {
    element.reviews.forEach(review => {
        if (review.text.trim().length < 50 || review.text.trim().length > 500) {
            if (document.querySelector(`.feedback-${idFeedback}`) === null) {
                console.log(`Отзыв для продукта ${element.product} должен быть не менее 50 и не более 500 символов`);
                const articleData = addElHtml(element.product);
                mainDivEl.append(articleData);
            } else {
                console.log(`Отзыв для продукта ${element.product} с id ${review.id} должен быть не менее 50 и не более 500 символов`);
            }
        } else {
            if (document.querySelector(`.feedback-${idFeedback}`) === null) {
                const articleData = addElHtml(element.product, element.reviews[0].text);
                mainDivEl.append(articleData);
            } else {
                document.querySelector(`.feedback-${idFeedback}`).insertAdjacentHTML('beforeend', `<p>${review.text}</p>`);

            }
        }
    })
    idFeedback++
})

const btnEl = document.querySelector('.btn');

mainDivEl.addEventListener('click', (e) => {
    if (e.target.classList.value === 'btn') {
        const reviewText = e.target.parentElement.querySelector('.input').value.trim();
        if (reviewText.length < 50 || reviewText.length > 500) {
            console.log(`Отзыв должен быть не менее 50 и не более 500 символов`);
        } else {
            e.target.parentElement.insertAdjacentHTML('beforeend', `<p>${reviewText}</p>`);
            e.target.parentElement.querySelector('.input').value = '';
            e.target.parentElement.querySelector('.input').focus();
            console.log('Отзыв добавлен');
    }}
});