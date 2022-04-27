var currentPrice = new XMLHttpRequest();

currentPrice.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd', true);
currentPrice.onreadystatechange = function(){
  if(currentPrice.readyState == 4){
    var ticker = JSON.parse(currentPrice.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('btc').innerHTML = "$" + price;
  };
};
currentPrice.send();