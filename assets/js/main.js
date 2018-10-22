"use strict";

var HttpClient = function HttpClient() {
  this.get = function (aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function () {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200) aCallback(anHttpRequest.responseText);
    };

    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
  };
};

var client = new HttpClient();

var showStat = function showStat() {
  client.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyDUQ9qfDzOq5ue3ovvIH9SS9gQFRg7YuwM', function (response) {
    console.log(JSON.parse(response).items[0].statistics.subscriberCount);
  });
};

showStat();

// 1. Создаём новый объект XMLHttpRequest
/*var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyDUQ9qfDzOq5ue3ovvIH9SS9gQFRg7YuwM', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
 	var subsCount = JSON.parse(xhr.responseText).items[0].statistics.subscriberCount; // responseText -- текст ответа.
 	document.querySelector('#count').innerText = subsCount;
} */