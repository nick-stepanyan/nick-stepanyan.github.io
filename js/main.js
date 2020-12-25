// // Создает стиль
// var s = new YMaps.Style();

// // Создает стиль значка метки
// s.iconStyle = new YMaps.IconStyle();

// s.iconStyle.href = "/img/metka.png";
// s.iconStyle.size = new YMaps.Point(49, 59);
// s.iconStyle.offset = new YMaps.Point(-9, -29);

// var placemark = new YMaps.Placemark(point, { style: s });
// map.addOverlay(placemark);

// Создает метку в центре Москвы
var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.609218, 55.753559));

// Устанавливает содержимое балуна
placemark.name = "Москва";
placemark.description = "Столица Российской Федерации";

// Добавляет метку на карту
map.addOverlay(placemark);


// Создает метку, значок которой не скрывается при открытии балуна
var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.609218, 55.753559), { hideIcon: false });

// Добавляет метку на карту
map.addOverlay(placemark);