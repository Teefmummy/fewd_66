$('#submit-button').on('click', changebackground);



function changebackground(event) {
  event.preventDefault;
  console.log('hello there');
  var city = $('#city-input').val();
  $('#city-input').val('');
  city = city.toLowerCase().trim();
  if(city == 'new york' || city =='nyc' || city =='new york city'){
    $('body').css('background-image', 'url("new york.JPG")');
  }
  else if(city == 'anchorage') {
    $('body').css('background-image', 'url("anchorage.jpg")');
  }
  else if(city == 'tokyo') {
    $('body').css('background-image', 'url("tokyo.jpg")');
  }
  else if(city == 'los angeles' || city == 'LA') {
    $('body').css('background-image', 'url("LA.JPG")');
  }
  else if(city == 'chicago' || city == 'chi-town') {
    $('body').css('background-image', 'url("chicago.jpg")');
  }
  else if(city == 'san francisco' || city == 'sf' || city == 'san fran') {
    $('body').css('background-image', 'url("sanfran.jpg")');
  }
};