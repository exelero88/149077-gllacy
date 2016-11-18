ymaps.ready(init);

var myMap;

function init () {
    // Параметры карты можно задать в конструкторе.
    myMap = new ymaps.Map(
        // ID DOM-элемента, в который будет добавлена карта.
        'map',
        // Параметры карты.
        {
            // Географические координаты центра отображаемой карты.
            center: [59.939349, 30.329175], //59.938631, 30.323055
            // Масштаб.
            zoom: 16,
            // Убираем элементы управления.
            controls: [],
            // Тип покрытия карты: "Спутник".
            type: 'yandex#map'
        }, {
            // Поиск по организациям.
            searchControlProvider: 'yandex#search'
        });
            // Сдвиг метки
        var myPlacemark = new ymaps.Placemark([59.938631, 30.323055] , {
            hintContent: 'Магазин мороженого - Gllacy',
            balloonContent: 'Мы находимся тут!'
        },
        {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [80, 140],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-40, -140]

        });
        myMap.geoObjects.add(myPlacemark);
        // Отключает скролл при прокрутке
        myMap.behaviors.disable('scrollZoom');

}

var link = document.querySelector(".index-map__btn");   /*Событие на кнопке*/
var popup = document.querySelector(".feedback");        /*Всплывающее окно*/
var close = popup.querySelector(".feedback__closed"); /*Закрыть форму*/
var overlay = document.querySelector(".overlay");   /*Оверлей*/
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]"); /*Фокус на поле логин*/
var email = popup.querySelector("[name=email]");
/*var storage = localStorage.getItem("login");*/

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-show-js");
    overlay.classList.add("overlay-js");
    login.focus();
    console.log("Нужно ввести логин и пароль");
})

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-show-js");
    overlay.classList.remove("overlay-js");
})

overlay.addEventListener("click", function(
    event) {
    event.preventDefault();
    overlay.classList.remove("overlay-js");
    popup.classList.remove("feedback-show-js");
})

form.addEventListener("submit", function(event) {
    if (!login.value || !email.value) {
        event.preventDefault();
        console.log("Нужно ввести логин и пароль");
    } else {
        localStorage.setItem("login", login.value);
    }
})

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-show-js") || overlay.classList.contains("overlay-js")) {
            popup.classList.remove("feedback-show-js") || overlay.classList.remove("overlay-js");
        }
    }
})
