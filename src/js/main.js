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

let showStat = () => {
	client.get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=AIzaSyDUQ9qfDzOq5ue3ovvIH9SS9gQFRg7YuwM', (response) => {
		console.log(JSON.parse(response).items[0].statistics.subscriberCount);
	})
}

showStat();


