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
            balloonContent: 'Это красивая метка'
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
