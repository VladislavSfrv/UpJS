// // Задание 1 (тайминг 30 минут)
// // Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
// // (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
// // имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
// // задержки — отображать новости на странице.
// // 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
// // 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
// // задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
// // добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// // 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
// // выполнение и ошибки с использованием then() и catch().
// // 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// // 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
// // её снова после завершения операции (будь то успешная загрузка или ошибка).

// function fetchNews() {
//     return new Promise((resolve, reject) => {
//         console.log("Загрузка новостей...");
//         setTimeout(() => {
//             const provability = Math.random();
//             if (provability < 0.1) {
//                 reject(new Error('Новости не загружены. Попробуйте позже'));
//             }else{
//                 resolve(['Новость 1', 'Новость 2', 'Новость 3']);
//             }
//         }, 2000);
//     })
// }

// document.querySelector('.load-news-btn').addEventListener('click', () => {
//     fetchNews()
//        .then(news => {
//             news.forEach(newItem => {
//                 document.querySelector('.news-container').insertAdjacentHTML('afterbegin', `<p>${newItem}</p>`);
//             });
//         })
//        .catch(error => {
//             console.error(error);
//             document.querySelector('.news-container').insertAdjacentHTML('afterbegin', `<p>Ошибка загрузки новостей: ${error.message}</p>`);
//         })
//         document.querySelector('.load-news-btn').disabled = true;
//         setTimeout(() => {
//         document.querySelector('.load-news-btn').disabled = false;
//         }, 2000);
// });

// // Задание 2 (тайминг 25 минут)
// // Создать интерактивную веб-страницу, где пользователи могут вводить текст, сохранять его в localStorage,
// // а затем загружать или удалять сохраненные данные.
// // Разработка Интерфейса:
// // Создать HTML-страницу с:
// // ● Одним текстовым полем для ввода данных пользователем.
// // ● Тремя кнопками: "Сохранить", "Загрузить" и "Очистить".
// // ● Местом для отображения сохраненного текста.
// // Программирование Логики на JavaScript:
// // 1. При нажатии на "Сохранить", введенный текст должен сохраняться в localStorage.
// // 2. При нажатии на "Загрузить", текст из localStorage должен отображаться на странице.
// // 3. При нажатии на "Очистить", сохраненный текст должен быть удален из localStorage, и соответствующее
// // сообщение отображается на странице.

// function saveUserText() {
//     const userText = document.getElementById('userText');
//     if(userText.value.length < 1) throw new Error("Текст не сохранен, так как вы ничего не ввели");
//     localStorage.setItem('userText', userText.value);
//     alert("Текст успешно сохранен");
// }

// function loadUserText() {
//     const userText = localStorage.getItem('userText');
//     if(userText === null) throw new Error("Сохраненный текст не найден");
//     document.querySelector('.display-user-text').innerHTML = userText;
// }

// function clearUserText() {
//     localStorage.removeItem('userText');
//     alert("Сохраненный текст успешно удален");
//     document.querySelector('.display-user-text').innerHTML = "";
// }

// const saveBtn = document.querySelector('.save-btn');
// const loadBtn = document.querySelector('.load-btn');
// const clearBtn = document.querySelector('.clear-btn');

// saveBtn.addEventListener('click', saveUserText);
// loadBtn.addEventListener('click', loadUserText);
// clearBtn.addEventListener('click', clearUserText);

// // Задание 3 (тайминг 35 минут)
// // Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
// // (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
// // быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
// // комплект мебели.
// // 1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
// // 2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
// // 3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
// // сохраняется в localStorage.
// // 4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
// // отображать ранее созданный комплект.
// // 5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
// // кнопку.
// // 6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// // 7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
// // предыдущие настройки удалены.

// function saveFurnitureSet() {
//     const table = document.getElementById('table').value;
//     const chair = document.getElementById('chair').value;
//     const sofa = document.getElementById('sofa').value;

//     const furnitureSet = {
//         table : table,
//         chair : chair,
//         sofa : sofa
//     };

//     localStorage.setItem('furnitureSet', JSON.stringify(furnitureSet));
//     alert("Сохраненные настройки успешно сохранены");
// }

// function loadFurnitureSet() {
//     const furnitureSet = JSON.parse(localStorage.getItem('furnitureSet'));
//     if(furnitureSet === null) throw new Error("Сохраненные настройки не найдены");
//     document.getElementById('table').value = furnitureSet.table;
//     document.getElementById('chair').value = furnitureSet.chair;
//     document.getElementById('sofa').value = furnitureSet.sofa;
// }

// const save = document.querySelector('#save');
// const clear = document.querySelector('#clear');

// save.addEventListener('click', saveFurnitureSet);
// window.addEventListener('load', loadFurnitureSet);
// clear.addEventListener('click', () => {
//     localStorage.removeItem('furnitureSet');
//     alert("Сохраненные настройки успешно удалены");
// });

// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. 
// Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, 
// данный отзыв удаляется из LocalStorage).

const addReviewBtn = document.querySelector('.add-review-btn');

addReviewBtn.addEventListener('click', () => {
    const productName = document.getElementById('product-name').value.trim();
    const reviewText = document.getElementById('review-text').value.trim();
    if (productName === '' || reviewText === '') throw new Error("Не добавлен отзыв или название продукта, попробуйте еще раз");
    setTimeout(() => {
        if (localStorage.getItem(productName) === null) {
            localStorage.setItem(productName, `[{"reviews" : "${reviewText}"}]`);
        } else {
            const reviewJSON = JSON.parse(localStorage.getItem(productName));
            reviewJSON.push({ reviews: reviewText });
            localStorage.setItem(productName, JSON.stringify(reviewJSON));
        }
    }, 10);
    if (localStorage.getItem('PRODUCT_KEY') === null) {
        localStorage.setItem('PRODUCT_KEY', `[{"title" : "${productName}"}]`);
    }
    else {
        if (localStorage.getItem(productName) === null) {
            const titleJSON = JSON.parse(localStorage.getItem('PRODUCT_KEY'));
            titleJSON.push({ title: productName });
            localStorage.setItem('PRODUCT_KEY', JSON.stringify(titleJSON));
        }
    }
    alert("Спасибо за отзыв!");
});
