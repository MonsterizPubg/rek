//  Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)


const rek = document.querySelectorAll('.promo__adv img');

rek.forEach(function (item) {
    item.remove();
});





// 2) Изменить жанр фильма, поменять "комедия" на "драма"


const janm = document.querySelector('.promo__bg');
const genre = janm.querySelector('.promo__genre'); 

genre.textContent = 'драма';



// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

janm.style.backgroundImage = 'url("img/bg.jpg")';


// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// const Film = document.querySelector(".promo__interactive-list");

// Film.innerHTML = "";

// movieDB.movies.push('Film');


// 5) Добавить нумерацию выведенных фильмов */

movieDB.movies.forEach(function (item, i) {
    Film.innerHTML = Film.innerHTML + `
         <li class="promo__interactive-item">${i + 1}. ${item}
             <div class="delete"></div>
         </li>`;
 });

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

