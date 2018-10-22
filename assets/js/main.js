'use strict';

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
var idChannel = 'UCVswRUcKC-M35RzgPRv8qUg';
var part = 'statistics, brandingSettings';
var nameChannel = document.querySelector('#name-channel');
var descriptionChannel = document.querySelector('#description-channel');
var avatarChannel = document.querySelector('#avatar-channel');
var countChannel = document.querySelector('#count');
var showStat = function showStat() {
  client.get('https://www.googleapis.com/youtube/v3/channels?part=' + part + '&id=' + idChannel + '&key=AIzaSyDUQ9qfDzOq5ue3ovvIH9SS9gQFRg7YuwM', function (response) {
    var info = JSON.parse(response).items[0];
    console.log(info);
    nameChannel.innerText = info.brandingSettings.channel.title;
    descriptionChannel.innerText = info.brandingSettings.channel.description;
    avatarChannel.src = info.brandingSettings.image.bannerImageUrl;
    countChannel.innerText = info.statistics.subscriberCount;
  });
};

showStat();