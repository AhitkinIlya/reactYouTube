var HttpClient = function () {
 this.get = function (aUrl, aCallback) {
  let anHttpRequest = new XMLHttpRequest();
  anHttpRequest.onreadystatechange = function () {
   if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
    aCallback(anHttpRequest.responseText);
  }

  anHttpRequest.open("GET", aUrl, true);
  anHttpRequest.send(null);
 };
};

let client = new HttpClient();
let idChannel = 'UCVswRUcKC-M35RzgPRv8qUg';
let part = 'statistics, brandingSettings';
let nameChannel = document.querySelector('#name-channel');
let descriptionChannel = document.querySelector('#description-channel');
let avatarChannel = document.querySelector('#avatar-channel');
let countChannel = document.querySelector('#count');
let showStat = () => {
	client.get(`https://www.googleapis.com/youtube/v3/channels?part=${part}&id=${idChannel}&key=AIzaSyDUQ9qfDzOq5ue3ovvIH9SS9gQFRg7YuwM`, (response) => {
    let info = JSON.parse(response).items[0];
    console.log(info);
    nameChannel.innerText = info.brandingSettings.channel.title;
    descriptionChannel.innerText = info.brandingSettings.channel.description;
    avatarChannel.src = info.brandingSettings.image.bannerImageUrl;
    countChannel.innerText = info.statistics.subscriberCount;
	})
}

showStat();


