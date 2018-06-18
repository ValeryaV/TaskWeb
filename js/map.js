function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.71136156901162,37.65276849999999],
        zoom: 18,
        controls: [] });

// Создадим экземпляр элемента управления «поиск по карте» с установленной опцией провайдера данных для поиска по организациям.
    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search' }});
    myMap.controls.add(searchControl);

// Программно выполним поиск определённой компании в текущей прямоугольной области карты.
    searchControl.search('ARTOX media'); }
ymaps.ready(init);