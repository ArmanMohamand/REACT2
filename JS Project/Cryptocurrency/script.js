var btc = document.getElementById("bit");
var ethe = document.getElementById("ethe");
var doge = document.getElementById("doge");

var settings = {
  async: true,
  crossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin,ethereum,dogecoin",
  method: "GET",
  header: {},
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  ethe.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});
